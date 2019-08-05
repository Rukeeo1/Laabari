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

const { UserModel } = require('../models/users');
console.log(UserModel);

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    _id: { type: GraphQLString, resolve: source => source._id },
    title: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: new GraphQLNonNull(GraphQLString) },
    src: { type: new GraphQLNonNull(GraphQLString) },
    synopsis: { type: new GraphQLNonNull(GraphQLString) },
    similarMovies: { type: new GraphQLNonNull(GraphQLObjectType) },
    creator: { type: new GraphQLNonNull(GraphQLObjectType) },
    cast: { type: new GraphQLNonNull(GraphQLObjectType) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    backgroundImage: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'returns all movies in the database',
  fields: () => ({
    type: MovieType,
    args: { id: { type: GraphQLString } },
    resolve: (parent, args) => BookModel.findById(args.id)
  })
});

const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
