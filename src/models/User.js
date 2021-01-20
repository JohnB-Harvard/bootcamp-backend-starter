const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const Course = require('./Course')
const Todo = require('./Todo')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      courses: {
        relation: HasManyRelation,
        modelClass: Course,
        join: {
          from: 'users.id',
          to: 'courses.userId',
        },
      },
      todos: {
        relation: HasManyRelation,
        modelClass: Todo,
        join: {
          from: 'users.id',
          to: 'todos.userId',
        },
      },
    }
  }
}

module.exports = User
