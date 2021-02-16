const student = require('./student')
const mutation = require('./mutation')

exports.resolvers = {
  Query: {
    ...student,
  },
  Mutation: {
    ...mutation,
  },
}
