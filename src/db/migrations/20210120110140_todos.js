const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'todos', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('name')
    .notNullable()

  table
    .text('description')

  table
    .uuid('userId')
    .references('users.id')
})

exports.down = async knex => knex.schema.dropTableIfExists('todos')
