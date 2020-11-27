const mongoLib = require('../libs/mongo');

class UserAPI {
  constructor() {
    this.collection = "users";
    this.mongoDB = new mongoLib()
  }
  async getUsers() {
    const users = await this.mongoDB.getAll(this.collection);
    return users || [];
  }
  async getUser(userId) {
    const user = await this.mongoDB.getOne(this.collection, userId);
    return user || {};
  }
  async postUser(dataUser) {
    const createUserId = await this.mongoDB.create(this.collection, dataUser);
    return createUserId;
  }
  async updateUser({ userId, user } = {}) {
    const updateUserId = await this.mongoDB.update(this.collection, userId, user)
    return updateUserId;
  }
  async deleteUserId(userId) {
    const deletedUserId = await this.mongoDB.delete(this.collection, userId);
    return deletedUserId;
  }
}

module.exports = UserAPI; 