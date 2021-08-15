const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { loadSchemaSync } = require("@graphql-tools/load");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('../resolvers/resolvers');

const schemaData = loadSchemaSync(__dirname + '/schema.graphql', {
    loaders: [
        new GraphQLFileLoader(),
    ]
});

const schema = makeExecutableSchema({
    typeDefs: schemaData,
    resolvers
});

module.exports = schema