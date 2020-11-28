const express = require("express");
const app = express();
const apiRouter = require('./router');

const { logError, errorHandler } = require('./utils/errors/errorHandler');

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }));
app
  .get('/', (req, res) => {
    res.send("User Api")
  })
  .use('/api/v1', apiRouter)
  .use(logError)
  .use(errorHandler);


module.exports = app;
