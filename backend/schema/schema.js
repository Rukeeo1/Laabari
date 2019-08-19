const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNumber,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} = graphql;

const { MovieModel, validateMovie } = require('../models/movies');
const { MovieType, MovieInput } = require('../types-graphql/movie');
const { findMovie } = require('../controllers/movies-controler');
console.log(findMovie, 'hello');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'returns all movies in the database',
  fields: () => ({
    movie: {
      type: MovieType,
      description: 'returns a single movie',
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => MovieModel.findById(args.id)
    },
    movies: {
      type: new GraphQLList(MovieType),
      description: 'returns all the movies',
      resolve: (parent, args) => MovieModel.find()
    },

    findMovie: {
      type: new GraphQLList(MovieType),
      description: 'should return a movie based on different search parameters',
      args: {
        input: { type: MovieInput }
      },
      resolve: (parent, args) => findMovie(args.input)
    }
  })
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Handles all mutations: delete, post and update',
  fields: () => ({
    addMovie: {
      type: MovieType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        year: { type: new GraphQLNonNull(GraphQLString) },
        poster: { type: new GraphQLNonNull(GraphQLString) },
        src: { type: new GraphQLNonNull(GraphQLString) },
        synopsis: { type:  GraphQLString },
        similarMovies: { type: new GraphQLList(GraphQLString) },
        creator: { type: new GraphQLList(GraphQLString) },
        cast: { type: new GraphQLList(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        backgroundImage: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        try {
          console.log(args, ';;;;;;');
          const { error } = validateMovie(args); //validation with joy

          if (error) {
            console.log(error.message, 'ello');
            throw new Error(error.details[0].message);
          }

          const movie = new MovieModel({
            title: args.title,
            year: args.year,
            src: args.src,
            poster: args.poster,
            synopsis: args.synopsis,
            similarMovies: args.similarMovies,
            creator: args.creator,
            cast: args.cast,
            genre: args.genre,
            backgroundImage: args.backgroundImage
          });

          movie.save();

          return movie
        } catch (error) {
          return error.message
        }
      }
    },
    deleteMovie: {
      type: MovieType,
      description: 'Deletes a single movie given the Id',
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        const movie = MovieModel.findByIdAndRemove(args.id);
        return movie;
      }
    },
    updateMovie: {
      type: MovieType,
      description: 'Updates the movie details',
      args: {
        id: { type: GraphQLString },
        input: { type: MovieInput }
      },
      resolve: async (parent, args) => {
        try {
          const movie = await MovieModel.findById(args.id);

          (movie.title = args.input.title || movie.title),
            (movie.src = args.input.src || movie.src),
            (movie.poster = args.input.poster || movie.poster),
            (movie.similarMovies =
              args.input.similarMovies || movie.similarMovies);
          movie.cast = args.input.cast || movie.cast;
          movie.title = args.input.title || movie.title;
          movie.synopsis = args.input.synopsis || movie.synopsis;
          movie.genre = args.input.genre || movie.genre;
          movie.backgroundImage =
            args.input.backgroundImage || movie.backgroundImage;
          movie.year = args.input.year || movie.year;
          movie.creator = args.input.creator || movie.creator;

          movie.save();

          return movie;
        } catch (error) {
          console.log(error.message, 'ello');
        }
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;

