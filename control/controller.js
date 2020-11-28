const UserService = require('../service/users');

const userService = new UserService();

const getUsers = async (req, res, next) => {
  try {
    throw new Error("Error al obtener todos los usuarios")
    const data = await userService.getUsers();
    res
      .status(200)
      .json({ data, message: "get all users" });
  } catch (err) {
    next(err)
  }
}
const getUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const data = await userService.getUser(userId);
    res
      .status(200)
      .json({ data, message: "get one user" });
  } catch (err) {
    next(err)
  }
}

const postUser = async (req, res, next) => {
  const { body: user } = req;
  try {
    const data = await userService.postUser(user);
    res
      .status(200)
      .json({
        data, message: "post data"
      })
  } catch (err) {
    next(err)
  }
}

const putUser = async (req, res, next) => {
  const { body: user } = req;
  const { userId } = req.params;

  try {
    const data = await userService.updateUser({ userId, user });
    res
      .status(200)
      .json({ data, message: "Put data" });
  } catch (err) {
    next(err)
  }
}

const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const data = await userService.deleteUserId(userId);
    res
      .status(200)
      .json({ data, message: "delete data" });
  } catch (err) {
    next(err)
  }
}


module.exports = {
  getUser,
  getUsers,
  putUser,
  deleteUser,
  postUser
}