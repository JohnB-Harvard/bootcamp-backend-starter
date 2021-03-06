const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addCourse(input: addCourseInput!): Course
    updateCourse(id: ID!, input: updateCourseInput): Course
    deleteCourse(input: addCourseInput): Course
    addTodo(input: addTodoInput!): Todo
    updateTodo(input: updateTodoInput!): Todo
    deleteTodo(input: addTodoInput!): Todo
  }
  
  type Query {
    userCourses(userID: ID!): [Course!]
    userById(userID: ID!): User
    userByEmail(email: String!): User
    courseById(courseID: ID!): Course
    todoById(todoID: ID!): Todo
    userTodos: [Todo!]
    userViewer: User
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    courses: [Course]
    todos: [Todo]
  }

  type Course {
    id: ID!
    name: String!
    professor: String
    monday: Boolean!
    tuesday: Boolean!
    wednesday: Boolean!
    thursday: Boolean!
    friday: Boolean!
    timeStart: String
    timeEnd: String
    hoursPerWeek: Int
    description: String
    enrolled: Boolean!
    user: User!
  }

  input addCourseInput {
    name: String!
    professor: String!
    monday: Boolean!
    tuesday: Boolean!
    wednesday: Boolean!
    thursday: Boolean!
    friday: Boolean!
    timeStart: String
    timeEnd: String
    hoursPerWeek: Int
    description: String
    enrolled: Boolean!
    userId: ID!
  }

  input updateCourseInput {
    name: String
    professor: String
    monday: Boolean
    tuesday: Boolean
    wednesday: Boolean
    thursday: Boolean
    friday: Boolean
    timeStart: String
    timeEnd: String
    hoursPerWeek: Int
    description: String
    enrolled: Boolean
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }

  type Todo {
    id: ID!
    name: String!
    description: String
    user: User!
  }
  input addTodoInput {
    name: String!
    description: String
    userId: ID!
  }
  input updateTodoInput {
    name: String
    description: String
  }
`
