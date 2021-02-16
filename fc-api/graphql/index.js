const { graphql } = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs } = require('./type-defs')
const { resolvers } = require('./resolvers')
const { database } = require('./database')
const { getUserId } = require('./utils')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

exports.handler = (request, response, context) => {
  let result
  let body = ''
  request.on('data', chunk => {
    body += chunk
  })
  request.on('end', async () => {
    try {
      const { query, variables, operationName } = JSON.parse(body)
      const gqlcontext = { userID: getUserId(request.headers), database }

      result = await graphql(
        schema,
        query,
        undefined,
        gqlcontext,
        variables,
        operationName,
      )
      response.setStatusCode(200)
    } catch (error) {
      response.setStatusCode(400)
      result = error
    } finally {
      response.setHeader('content-type', 'application/json')
      response.send(JSON.stringify(result))
    }
  })
}
