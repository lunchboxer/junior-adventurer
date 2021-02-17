// const { hash, compare } = require('bcrypt')
// const { sign } = require('jsonwebtoken')
// const { isValidEmail } = require('../../utils')
const { allowAuthenticatedUsers } = require('../permissions')

module.exports = {
  userCount: (_, parameters, context) => {
    return context.database.users.length
  },
  me: (_, parameters, context) => {
    allowAuthenticatedUsers(context)
    return context.database.users.find(u => u.id === context.userId)
  },
  user: (_, { id }, context) => {
    allowAuthenticatedUsers(context)
    return context.database.users.find(u => u.id === id)
  },
  users: (_, parameters, context) => {
    allowAuthenticatedUsers(context)
    return context.database.users
  },
}
