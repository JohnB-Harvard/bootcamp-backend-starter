const merge = require('lodash.merge')
const Users = require('./Users')
const Courses = require('./Courses')
const Todos = require('./Todos')

const resolvers = [Courses, Users, Todos]

module.exports = merge(...resolvers)
