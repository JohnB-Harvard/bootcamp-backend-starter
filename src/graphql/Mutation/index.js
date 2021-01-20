const merge = require('lodash.merge')
const Auth = require('./Auth')
const Courses = require('./Courses')

const resolvers = [Auth, Courses]

module.exports = merge(...resolvers)
