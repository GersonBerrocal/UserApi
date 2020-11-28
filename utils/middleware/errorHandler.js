const config = require('../../config/config');
const boom = require('@hapi/boom');

const withErrorStack = (err, stack) => config.dev ? { ...err, stack } : { err };

const logError = (err, req, res, next) => {
  console.log(err);
  next(err);
}
const errorHandler = (err, req, res, next) => {
  const { output: { statusCode, payload } } = err
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

const wrapError = (err, req, res, next) => {
  if (!err.isBoom)
    next(boom.badImplementation(err));
  next(err)
}

module.exports = {
  logError,
  errorHandler,
  wrapError
}