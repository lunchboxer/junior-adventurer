module.exports = {
  createStudent: (_, parameters, context) => {
    return {}
  },
  createUser: (_, paramters, context) => {
    return { token: undefined, user: {} }
  },
  deleteUser: (_, parameters, context) => {
    return {}
  },
  changePassword: (_, { newPassword, oldPassword }, context) => {
    return {}
  },
  login: (_, { email, password }, context) => {
    return { token: undefined, user: {} }
  },
  updateUser: (_, parameters, context) => {
    return {}
  },
}
