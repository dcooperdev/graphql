var makeExecutableSchema = require('graphql-tools').makeExecutableSchema
var resolvers = require('./resolvers')

const typeDefs = `

    type Query {
        hello: String
        greet( name: String! ): String,
        tasks: [Task]
    }

    type Task {
        _id: ID,
        title: String,
        description: String,
        resolved: Boolean
    }

    type Mutation {
        createTask( input: TaskInput ): Task
    }

    input TaskInput {
        title: String!,
        description: String!,
        resolved: Boolean
    }

`;
module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})