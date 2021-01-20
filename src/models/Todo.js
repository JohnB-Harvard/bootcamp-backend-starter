const { HasOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Todo extends BaseModel {
  static get tableName() {
    return 'todos'
  }

  static get relationMappings() {
    return {
      users: {
        relation: HasOneRelation,
        modelClass: User,
        join: {
          from: 'todos.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Todo
