const casual = require('casual')
const userData = require('./user')

casual.define('todo', ({ userId }) => ({
  id: casual.uuid,
  name: casual.title,
  description: casual.sentence,
  userId,
}))

const todoData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  todoData.push(casual.todo({ userId }))
}

module.exports = todoData
