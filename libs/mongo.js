const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config/config');

const DB_NAME = encodeURIComponent(config.DB_NAME);
const DB_URL = config.DB_URL;

class MongoLib {
  constructor() {
    this.client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbname = DB_NAME;
  }
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((res, rej) => {
        this.client.connect(err => {
          if (err)
            rej(err);
          console.log("Connected successuful to mongo");
          res(this.client.db(this.dbname));
        })
      })
    }
    return MongoLib.connection;
  }
  getAll(collection) {
    return this.connect().then(db => {
      return db.collection(collection).find().toArray();
    })
  }
  getOne(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    })
  }
  create(collection, data) {
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data);
    }).then(result => result.insertedId)
  }
  update(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    }).then(result => result.upsertedId || id)
  }
  delete(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) });
    }).then(() => id)
  }
}

module.exports = MongoLib;