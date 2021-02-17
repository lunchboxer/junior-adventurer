module.exports = {
  student: (_, { id }, context) => {
    return context.database.students.find(s => s.id === id)
  },
  students: (_, parameters, context) => {
    return context.database.students
  },
}
