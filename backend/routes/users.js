const express = require('express');
const router = express.Router();
//bring in the model to this place...
const { validateUser, UserModel } = require('../models/users');
const validateLoginEmail = require('../validations/validationWithJoi');

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
  const { error } = validateUser(req.body); //validation with joy

  if (error) return res.status(400).send(error.details[0].message); //returns an error if the validation fails

  user = new UserModel({
    //the user object to be saved....
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    console.log(error.message);
    return res.send(error.message)
  }
});

router.put('/:id', async (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    isSubscribed: req.body.isSubscribed
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndRemove(req.params.id);
    if (!user)
      return res.status(400).send('the user with the given id doesnt exist');
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body);

  // // const { error } = validateLoginEmail(req.body);

  // if (error) return res.status(400).send(error.details[0].message);
  console.log({ email: req.body.email });

  const user = await UserModel.findOne({ email: req.body.email });
  console.log(user,'hello i am user')

  if (!user) return res.status(400).send('Email Not Found!!!');

  const password = user.password === req.body.password ? true : false;

  if (!password) return res.status(400).send('Invalid password');

  res.send({ name: user.email, id: user._id, date: user.date });
});
/*

 try {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name
      },
      {
        new: true
      }
    );
    res.send(genre);
  } catch (error) {
    console.log(error.message);
    return res.status(404).send('the genre with the given id doesnt exist');
  }

*/

//basically i could have a router that updates plan
// i could have another one that updates users details....
//then a router to delete....

module.exports = router;
