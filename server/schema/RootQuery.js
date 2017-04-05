const graphql = require('graphql');
const {GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    dummyField: {type: GraphQLID}
  })
});

module.exports = RootQuery;