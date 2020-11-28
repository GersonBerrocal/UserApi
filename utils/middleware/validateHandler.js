const boom = require('@hapi/boom');

const validate = () => {
  return false;
}

const validateHandler = (schema, check = "body") => {
  return (req, res, next) => {
    const error = validate(check[data], schema);
    err ? next(boom.badRequest(err)) : next();
  };
}

module.exports = validateHandler;