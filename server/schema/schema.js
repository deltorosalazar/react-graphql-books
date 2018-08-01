const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString,
    GraphQLInt, 
    GraphQLSchema 
} = graphql

var books = [
    {id: '1', name: 'Name of the Wind', genre: 'Fantasy'},
    {id: '2', name: 'The Final Empire', genre: 'Fantasy'},
    {id: '3', name: 'The Long Earth', genre: 'Sci-Fi'}
]

var authors = [
    {id: '1', name: 'Patrick Rothfuss', age: 44},
    {id: '2', name: 'Brandon Sanderson', age: 62},
    {id: '3', name: 'Terry Pratchett', age: 66}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { 
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
}) 