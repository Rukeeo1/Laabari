const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    minlength: 8
  },
  mobile: {
    type: String,
    minlength: 5,
    maxlength: 15
  },
  isSubscribed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  plan: {
    type: String,
    default: 'basic'
  },
  password: {
    type: String,
    minlength: 6
  }
});

const UserModel = mongoose.model('User', userSchema);

//an extra validation handle by Joi...
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3),
    email: Joi.string().email(),
    mobile: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/),
    isSubscribed: Joi.boolean(),
    date: Joi.date()
  };

  return Joi.validate(user, schema);
}

exports.UserModel = UserModel;
exports.validateUser = validateUser;
