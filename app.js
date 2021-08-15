const express = require('express');
const compression = require('compression');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./src/schemas/schema')

const PORT = 5200

const app = express()

app.use('*', cors())
app.use(compression())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/', (req, res) => {
    res.send('Bienvenido a la academia')
})

app.listen({port: PORT}, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

