const allowAuthenticatedUsers = context => {
  // Check if user is authenticated
  if (!context.userId) {
    throw new Error('Only authenticated users may access this resource.')
  }
  // Check if autheticated user exists
  const foundUser = context.database.users.find(u => u.id === context.userId)
  if (!foundUser) throw new Error('Authenticated user not found.')
}
module.exports = {
  allowAuthenticatedUsers,
}
