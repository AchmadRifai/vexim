const { buildSchema } = require('graphql'), { createHandler } = require('graphql-http/lib/use/express'), express = require('express')

const graphqlTest = (app = express()) => {
    const schema = buildSchema(`type Query { hello: String } `)
    const rootValue = {
        hello() {
            return 'Hello world!';
        },
    }
    app.all(
        '/graphql',
        createHandler({
            schema: schema,
            rootValue
        }),
    )
}

module.exports = { graphqlTest }