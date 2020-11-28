const express = require("express");
const app = express();
const apiRouter = require('./router');

const { logError, errorHandler, wrapError } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/noFoundHandler');

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }));
app
  .get('/', (req, res) => {
    res.send("User Api")
  })
  .use('/api/v1', apiRouter);

app.use(notFoundHandler);

// Error middleware
app.use(logError)
  .use(wrapError)
  .use(errorHandler);


module.exports = app;
