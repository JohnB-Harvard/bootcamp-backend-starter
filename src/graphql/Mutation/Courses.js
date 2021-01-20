const Course = require('../../models/Course')

const addCourse = async (obj, { input }) => {
  try {
    const newCourse = await Course.query().insert({
      name: input.name,
      location: input.location,
      professor: input.professor,
      monday: input.monday,
      tuesday: input.tuesday,
      wednesday: input.wednesday,
      thursday: input.thursday,
      friday: input.friday,
      timeStart: input.timeStart,
      timeEnd: input.timeEnd,
      hoursPerWeek: input.hoursPerWeek,
      enrolled: false,
    }).returning('*')
    return newCourse
  } catch (err) {
    throw new Error('failed to add course')
  }
}

const updateCourse = async (obj, { input }) => {
  try {
    const updCourse = await Course.query().update({
      name: input.name,
      location: input.location,
      professor: input.professor,
      monday: input.monday,
      tuesday: input.tuesday,
      wednesday: input.wednesday,
      thursday: input.thursday,
      friday: input.friday,
      timeStart: input.timeStart,
      timeEnd: input.timeEnd,
      hoursPerWeek: input.hoursPerWeek,
      enrolled: input.enrolled,
    }).returning('*')
    return updCourse
  } catch (err) {
    throw new Error('failed to update course')
  }
}

const deleteCourse = async (obj, { input }) => {
  try {
    const delCourse = await Course.query().deleteById(input.id).returning('*')
    return delCourse
  } catch (err) {
    throw new Error('failed to delete course')
  }
}

const resolver = {
  Mutation: {
    addCourse,
    updateCourse,
    deleteCourse,
  },
}

module.exports = resolver
