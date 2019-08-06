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

const { MovieModel } = require('../models/movies');

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: new GraphQLNonNull(GraphQLString) },
    src: { type: new GraphQLNonNull(GraphQLString) },
    synopsis: { type: GraphQLString },
    similarMovies: { type: new GraphQLList(GraphQLString) },
    creator: { type: new GraphQLList(GraphQLString) },
    cast: { type: new GraphQLList(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    backgroundImage: { type: GraphQLNonNull(GraphQLString) }
  })
});

exports.MovieType = MovieType;
