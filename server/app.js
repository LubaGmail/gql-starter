const express = require('express');
const graphqlHTTP = require('express-graphql');
const crawler = require('./crawler/crawler');
const app = express();              // assume express framework instance which provides HTTP utilities

/**
 *  How graphql interracts with file datastore
 *  Endpoint: http://localhost:4000/graphql
 */

// user graphiql client
app.use('/graphql', graphqlHTTP({
    schema: crawler,
    graphiql: true
}));

app.listen(4000, () => console.log('Example app listening on port 4000'))
