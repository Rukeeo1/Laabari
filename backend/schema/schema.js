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
    synopsis: { type: GraphQLNonNull(GraphQLString) },
    similarMovies: { type: (GraphQLList) },
    creator: { type: GraphQLList },
    cast: { type: GraphQLList },
    genre: { type: GraphQLNonNull(GraphQLString) },
    backgroundImage: { type: GraphQLNonNull(GraphQLString) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'returns all movies in the database',
  fields: () => ({
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => UserModel.findById(args.id)
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
