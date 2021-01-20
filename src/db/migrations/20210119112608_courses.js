const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'courses', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('name')
    .notNullable()

  table
    .string('professor')

  table
    .string('location')

  table
    .boolean('monday')
    .notNullable()

  table
    .boolean('tuesday')
    .notNullable()

  table
    .boolean('wednesday')
    .notNullable()

  table
    .boolean('thursday')
    .notNullable()

  table
    .boolean('friday')
    .notNullable()

  table
    .time('timeStart')

  table
    .time('timeEnd')

  table
    .integer('hoursPerWeek')

  table
    .text('description')

  table
    .boolean('enrolled')
    .notNullable()
    .defaultTo(false)

  table
    .uuid('userId')
    .references('users.id')
})

exports.down = async knex => knex.schema.dropTableIfExists('courses')
