const { verify } = require('jsonwebtoken')

const getUserId = headers => {
  const Authorization = headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, process.env.JWT_SECRET)
    return verifiedToken && verifiedToken.userId
  }
}

module.exports = {
  getUserId,
}
