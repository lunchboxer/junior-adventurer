exports.typeDefs = /* GraphQL */ `
  type AuthPayload {
    token: String
    user: User
  }

  type Student {
    id: ID
    name: String
    birthdate: String
    languages: String
  }

  type User {
    id: ID
    name: String
    email: String
    isVerified: Boolean
  }
  type Query {
    student(id: ID): Student
    students: [Student]
  }
  type Mutation {
    createStudent(birthdate: String, languages: String, name: String): Student
  }
`
// type Mutation {
//   changePassword(newPassword: String!, oldPassword: String!): User
//   createUser(email: String!, name: String, password: String!): AuthPayload
//   deleteUser(key: ID!): User
//   login(email: String!, password: String!): AuthPayload
//   updateUser(email: String, key: ID!, name: String): User
// }

// type Query {
//   me: User
//   user(key: ID!): User
//   userCount: Int
//   users: [User]
// }
