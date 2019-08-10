const { MovieModel } = require('../models/movies');

async function findMovie(query) {
  return MovieModel.find({
    $or: [{ title: query.title }, { year: query.year }, { genre: query.genre }]
  });
}


exports.findMovie = findMovie;
