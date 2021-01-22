const Todo = require('../../models/Todo')

const addTodo = async (obj, { input }) => {
  try {
    const newTodo = await Todo.query().insert({
      name: input.name,
      description: input.description,
      userId: input.userId,
    }).returning('*')
    return newTodo
  } catch (err) {
    throw new Error(err)
  }
}

const updateTodo = async (obj, { input }) => {
  try {
    const updTodo = await Todo.query().update({
      name: input.name,
      description: input.description,
    }).returning('*')
    return updTodo
  } catch (err) {
    throw new Error('failed to update todo')
  }
}

const deleteTodo = async (obj, { input }) => {
  try {
    const delTodo = await Todo.query().deleteById(input.id).returning('*')
    return delTodo
  } catch (err) {
    throw new Error('failed to delete todo')
  }
}

const resolver = {
  Mutation: {
    addTodo,
    updateTodo,
    deleteTodo,
  },
}

module.exports = resolver
