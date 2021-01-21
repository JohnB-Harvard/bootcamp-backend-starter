const { UserInputError } = require('apollo-server-express')
const User = require('../../models/User')
const {
  hashPassword, comparePassword, createToken,
} = require('../../lib/auth')

const login = async (obj, { email, password }) => {
  const user = await User.query().findOne({
    email,
  })
  if (!user) {
    throw new UserInputError('Invalid email or password')
  }

  const validPassword = await comparePassword(password, user.password)
  if (!validPassword) {
    throw new UserInputError('Invalid email or password')
  }

  // If successful login, set authentication information
  const payload = {
    id: user.id,
    email: user.email,
  }
  const token = createToken(payload)

  return { user, token }
}

// Linter suggestion was very very ugly. vv
// eslint-disable-next-line object-curly-newline
const register = async (obj, { input: { email, password, firstName, lastName } }) => {
  const emailExists = await User.query().findOne({ email })
  if (emailExists) {
    throw new UserInputError('Email is already in use')
  }

  const passwordHash = await hashPassword(password)
  const user = await User.query().insertAndFetch({
    email,
    password: passwordHash,
    firstName,
    lastName,
  })

  // If successful registration, set authentication information
  const payload = {
    id: user.id,
    email: user.email,
  }
  const token = createToken(payload)

  return { user, token }
}

const resolver = {
  Mutation: { login, register },
}

module.exports = resolver
