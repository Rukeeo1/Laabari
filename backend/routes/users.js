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

// router.post('/', async(req,res) => {

// })
router.post('/', async (req, res) => {
  console.log('hhhl');
  //we have to validate that the req is valid
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    //if valid...ensure that that user never exist in the database..
    // let user = await User.findOne({ email: req.body.email });
    //if the user exist then return an errro message
    //if (user) return res.status(400).send('User alreaady exist...');

    //if user doesn't exist, then create a new one...with the same variable
    user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    //save user....
    try {
      await user.save();
    } catch (error) {
      res.send(error.message + ' arlready exists');
    }

    //once user has been save, return the user back to the client.
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});
module.exports = router;
