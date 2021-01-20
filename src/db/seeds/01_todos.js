const todoData = require('../../../data/todo')

exports.seed = knex => knex('todos').del()
  .then(() => knex('todos').insert(todoData))
