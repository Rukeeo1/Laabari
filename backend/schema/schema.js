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
const { MovieType } = require('../types-graphql/movie');

// const MovieType = new GraphQLObjectType({
//   name: 'Movie',
//   fields: () => ({
//     _id: { type: GraphQLString},
//     title: { type: new GraphQLNonNull(GraphQLString) },
//     year: { type: new GraphQLNonNull(GraphQLString) },
//     src: { type: new GraphQLNonNull(GraphQLString) },
//     synopsis: { type: GraphQLString },
//     similarMovies: { type: new  GraphQLList(GraphQLString) },
//     creator: { type:new  GraphQLList(GraphQLString) },
//     cast: { type:new  GraphQLList(GraphQLString)},
//     genre: { type:  new GraphQLNonNull(GraphQLString) },
//     backgroundImage: { type: GraphQLNonNull(GraphQLString) }
//   })
// });

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
        synopsis: { type: GraphQLString },
        similarMovies: { type: new GraphQLList(GraphQLString) },
        creator: { type: new GraphQLList(GraphQLString) },
        cast: { type: new GraphQLList(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        backgroundImage: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const { error } = validateMovie(args); //validation with joy

        if (error) {
          throw new Error(error.details[0].message);
        }
        const movie = new MovieModel({
          title: args.title,
          year: args.title,
          src: args.src,
          poster: args.poster,
          synopsis: args.synopsis,
          similarMovies: args.similarMovies,
          creator: args.creator,
          cast: args.cast,
          genre: args.genre,
          backgroundImage: args.backgroundImage
        });

        return movie.save();
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
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;
