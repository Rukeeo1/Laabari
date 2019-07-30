const express = require('express');
const router = express.Router();
//bring in the model to this place...
const { validateUser, UserModel } = require('../models/users');

router.get('/', async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

router.get('/:email', async (req, res) => {
    console.log('i came here ')
    console.log(req.params.email)
    const user = await UserModel.findOne({email:req.params.email});

    if (!user) return res.status(404).send("contact doesn't exist");
    return res.send(user);
})
module.exports = router;
