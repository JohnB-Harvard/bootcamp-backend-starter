const Todo = require('../../models/Todo')

const todoById = async (obj, { todoID }) => {
  try {
    const todo = await Todo.query().findOne('id', todoID)
    return todo
  } catch (err) {
    throw new Error('failed to get todo')
  }
}

const resolver = {
  Query: {
    todoById,
  },
}

module.exports = resolver
