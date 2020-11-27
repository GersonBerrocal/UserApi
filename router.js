const express = require('express');
const router = express.Router();
const controller = require('./control/controller');


router
  .get("/:userId", controller.getUser)
  .get("/", controller.getUsers)
  .post("/", controller.postUser)
  .put("/:userId", controller.putUser)
  .delete("/:userId", controller.deleteUser)



module.exports = router;