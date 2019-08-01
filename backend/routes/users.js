const express = require('express');
const router = express.Router();
//bring in the model to this place...
const { validateUser, UserModel } = require('../models/users');

router.get('/', async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

router.get('/:email', async (req, res) => {
  const user = await UserModel.findOne({ email: req.params.email });
  if (!user) return res.status(404).send("contact doesn't exist");
  return res.send(user);
});

router.post('/', async (req, res) => {
  console.log('ukajd;flkadjsaf;ldsk');
  const { error } = validateUser(req.body); //validation with joy
  console.log(error);
  if (error) return res.status(400).send(error.details[0].message);

  user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(res => {
      res.status(200).send(res);
    })
    .catch(err => {
      res.send(err.message);
    });

  //res.send(user); //returns the user after a sucessful save attempt....
});

module.exports = router;
