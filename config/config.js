const sensitive = require('./sensitive');

const config = {
  // 
  PORT: 3000,
  CORS: sensitive.CORS,
  DB_URL: sensitive.DB_URL,
  DB_NAME: sensitive.DB_NAME
}


module.exports = config;