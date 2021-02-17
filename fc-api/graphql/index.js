const { graphql } = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { resolvers } = require('./resolvers')
const { database } = require('./database')
const { getUserId } = require('./utils')
const fs = require('fs')

const loadGraphqlFile = () => {
  try {
    return fs.readFileSync('./schema.graphql', 'utf8')
  } catch (error) {
    console.error(error)
  }
}

const typeDefs = loadGraphqlFile()

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
      response.setHeader('content-type', 'application/json')
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
      const code = result.errors ? 400 : 200
      response.setStatusCode(code)
    } catch (error) {
      response.setStatusCode(500)
      console.error(error)
      result = error
    } finally {
      response.send(JSON.stringify(result))
    }
  })
}
