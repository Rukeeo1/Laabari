const express = require('express');
const router = express.Router();
//bring in the model to this place...
const { validateUser, UserModel } = require('../models/users');
console.log(UserModel,'hello');
console.log(validateUser,'rukee');

router.get('/', async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});


module.exports = router


