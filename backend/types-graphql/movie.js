const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNumber,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLInputObjectType
} = graphql;

const { MovieModel } = require('../models/movies');


const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: new GraphQLNonNull(GraphQLString) },
    src: { type: new GraphQLNonNull(GraphQLString) },
    synopsis: { type: GraphQLString },
    poster: {type :GraphQLString},
    similarMovies: { type: new GraphQLList(GraphQLString) },
    creator: { type: new GraphQLList(GraphQLString) },
    cast: { type: new GraphQLList(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    backgroundImage: { type: GraphQLNonNull(GraphQLString) }
  })
});

const MovieInput = new GraphQLInputObjectType({
  name: 'MovieInputType',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    year: {
      type: GraphQLString
    },
    src: { type: GraphQLString },
    synopsis: { type: GraphQLString },
    similarMovies: { type: new GraphQLList(GraphQLString) },
    creator: { type: new GraphQLList(GraphQLString) },
    cast: { type: new GraphQLList(GraphQLString) },
    genre: { type: GraphQLString },
    backgroundImage: { type: GraphQLString }
  })
});

exports.MovieInput = MovieInput;

exports.MovieType = MovieType;
