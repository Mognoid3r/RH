const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Tasks {
        _id: ID!
        text: String!
        completed: Boolean
    }
    type TasksCompleted {
        _id: ID!
        completed: Boolean
    }
`;

module.exports = typeDefs