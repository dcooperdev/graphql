var express = require('express');
var graphqlHTTP = require('express-graphql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schema = require('./src/schema')

var app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
