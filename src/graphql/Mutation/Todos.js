const Todo = require('../../models/Todo')

const addTodo = async (obj, { input }) => {
  try {
    const newTodo = await Todo.query().insert({
      name: input.name,
      desc: input.desc,
      userId: input.userId,
    }).returning('*')
    return newTodo
  } catch (err) {
    throw new Error('failed to add todo')
  }
}

const updateTodo = async (obj, { input }) => {
  try {
    const updTodo = await Todo.query().update({
      name: input.name,
      desc: input.desc,
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
