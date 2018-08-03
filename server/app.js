const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb://deltorosalazar:deltorosalazar123@ds263791.mlab.com:63791/react-graphql-books', {
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log('Connected to the Database')
})

const port = 3000 || process.env.PORT

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log('Server started on port ' + port)
})
