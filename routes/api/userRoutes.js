const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController.js');

// GET all users and POST new user
router.route('/').get(getUsers).post(createUser);

// GET a single user, PUT (update), and DELETE a user by _id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
