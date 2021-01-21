const Course = require('../../models/Course')
const User = require('../../models/User')
const Todo = require('../../models/Todo')

const userById = async (obj, { userID }) => {
  try {
    const user = await User.query().findOne('id', userID)
    return user
  } catch (err) {
    throw new Error('failed to get user')
  }
}

const userByEmail = async (obj, { email }) => {
  try {
    const user = await User.query().findOne('email', email)
    return user
  } catch (err) {
    throw new Error('failed to get user')
  }
}

const userViewer = async (obj, _params, { user: { id } }) => {
  const user = User.query().findOne('id', id)
  if (user) {
    return user
  }
  throw new Error('viewer query failed')
}

const courses = async ({ id }) => {
  const c = await Course.query().where('userId', id)
  return c
}

const todos = async ({ id }) => {
  const t = await Todo.query().where('userId', id)
  return t
}

const resolver = {
  Query: {
    userById,
    userByEmail,
    userViewer,
  },
  User: {
    courses,
    todos,
  },
}

module.exports = resolver
