const merge = require('lodash.merge')
const Auth = require('./Auth')
const Courses = require('./Courses')
const Todos = require('./Todos')

const resolvers = [Auth, Courses, Todos]

module.exports = merge(...resolvers)
