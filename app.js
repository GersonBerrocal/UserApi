const express = require("express");
const app = express();
const apiRouter = require('./router');

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send("User Api")
})
app.use('/api/v1', apiRouter)
app.use((err, req, res) => {
  res.send({ message: "Error", error: err })
})


module.exports = app;
