const genres = require('../data/genres');
const _ = require('lodash');
const graphql = require('graphql');

const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

// audience:  children, adult, all ages
const GenreType = new GraphQLObjectType({
    name: 'Genre',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        audience: { type: GraphQLString }
    })
});

// Entry point to the Graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // All performances
        genres: {
            type: new GraphQLList(GenreType),
            resolve(parent, args) {
                return genres
            }
        },

        // other queries...  
         
    }
   
});

// End point
module.exports = new GraphQLSchema({
    query: RootQuery
});


