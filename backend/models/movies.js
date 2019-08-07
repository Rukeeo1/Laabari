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
movieSchema.plugin(uniqueValidator);

//use the schema above to create a the user model
const MovieModel = mongoose.model('Movie', movieSchema);

//this is meant to be a validate movie with joi
function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(3)
      .required(),
    year: Joi.string(),
    poster: Joi.string().required(),
    src: Joi.string().required(),
    synopsis: Joi.string().required(),
    similarMovies: Joi.array().items(Joi.string()),
    creator: Joi.array().items(Joi.string()),
    cast: Joi.array().items(Joi.string()),
    genre: Joi.string().required(),
    backgroundImage: Joi.string().required()
  };

  return Joi.validate(movie, schema);
}

exports.MovieModel = MovieModel;
exports.validateMovie = validateMovie;
