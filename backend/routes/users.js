const express = require('express');
const router = express.Router();
//bring in the model to this place...
const { validateUser, UserModel } = require('../models/users');

router.get('/', async (req, res) => {
  console.log('hehlllajsf;djk');
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

  user //saves the object and sends the response back or returns an error, if something goes wrong...
    .save()
    .then(res => {
      res.status(200).send(res);
    })
    .catch(err => {
      res.send(err.message);
    });
});

router.put('/:id', async (req, res) => {
  console.log('hello rukee ... i am here...');
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
  console.log('hello i was here....');
  try {
    const user = await UserModel.findByIdAndRemove(req.params.id);
    if (!user)
      return res.status(400).send('the user with the given id doesnt exist');
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
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
