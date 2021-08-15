const query = require('./query');
const mutation = require('./mutation');
const type = require('./type');

const resolvers = {
    Query: query,   
    Mutation: mutation,
    ...type 
}

module.exports = resolvers