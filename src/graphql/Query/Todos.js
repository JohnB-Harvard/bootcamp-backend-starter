const Todo = require('../../models/Todo')

const todoById = async (obj, { todoID }) => {
  try {
    const todo = await Todo.query().findOne('id', todoID)
    return todo
  } catch (err) {
    throw new Error('failed to get todo')
  }
}

const userTodos = async (obj, args, { user }) => {
  try {
    const e = await Todo.query().where('userId', user.id)
    return e
  } catch (err) {
    throw new Error('Failed to fetch user')
  }
}

const resolver = {
  Query: {
    todoById,
    userTodos,
  },
}

module.exports = resolver
