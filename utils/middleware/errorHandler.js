const config = require('./../../config/config');

const withErrorStack = (err, stack) => config.dev ? { err, stack } : { err };

const logError = (err, req, res, next) => {
  console.log(err);
  next(err);
}
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logError,
  errorHandler
}