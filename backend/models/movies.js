const Joi = require('joi');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//create the mongoose schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  poster: {
    type: String
  },
  src: {
    type: String
  },
  synopsis: {
    type: String
  },
  src: {
    type: link
  },
  similarMovies: {
    type: Array
  },
  creator: {
    type: Array
  },
  cast: {
    type: Array
  },
  genre: {
    type: String
  },
  backgroundImage: {
    type: String
  }
});

//add the user plugin...
userSchema.plugin(uniqueValidator);

//use the schema above to create a the user model
const UserModel = mongoose.model('User', userSchema);

//an extra validation handle by Joi...
function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .allow(''),
    email: Joi.string().email(),
    mobile: Joi.string()
      .regex(/^\d{4}\d{3}\d{4}$/)
      .allow(''),
    isSubscribed: Joi.boolean(),
    plan: Joi.string(),
    password: Joi.string(),
    date: Joi.date()
  };

  return Joi.validate(user, schema);
}

exports.UserModel = movieModel;
exports.validateUser = validateUser;
