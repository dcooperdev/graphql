const tasks = require('./sample');
const resolvers = {
    Query: {
        hello: () => {
            return `Hello world with GraphQL`
        },
        greet: ( root, { name } ) => {
            return `Hello ${ name } from GraphQL`
        },
        tasks: () => {
            return tasks
        },
    },
    Mutation: {
        createTask( _, { input } ) {
            input._id = tasks.length;
            tasks.push( input )
            return input;
        }
    }
};

module.exports = resolvers;