const Exercise = require('../models/exercises')

const createExercise = async (req, res) => {
  try {
    const exercise = await new Exercise(req.body)
    await exercise.save()
    return res.status(201).json({
      exercise
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getExercises = async (req, res) => {
  try {
    const exercise = await Exercise.find()
    return res.status(200).json({ exercise })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Exercise.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Exercise Deleted')
    }
    throw new Error('Exercise not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(exercise)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createExercise,
  getExercises,
  deleteExercise,
  updateExercise
}
