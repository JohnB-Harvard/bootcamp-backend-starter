const Course = require('../../models/Course')
const User = require('../../models/User')

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

const courses = async ({ id }) => {
  const c = await Course.query().where('userId', id)
  return c
}

const resolver = {
  Query: {
    userById,
    userByEmail,
  },
  User: {
    courses,
  },
}

module.exports = resolver
