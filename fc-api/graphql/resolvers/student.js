module.exports = {
  student: (_, { id }, context) => {
    return context.database.students.find(s => s.id === id)
  },
  students: (_, _arguments, context) => {
    return context.database.students
  },
}
