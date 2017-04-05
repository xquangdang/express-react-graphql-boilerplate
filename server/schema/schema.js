const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQuery = require('./RootQuery.js');

module.exports = new GraphQLSchema({
  query: RootQuery
});