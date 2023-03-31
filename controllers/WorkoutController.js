const Workout = require('../models/workouts')

const createWorkout = async (req, res) => {
  try {
    const workout = await new Workout(req.body)
    await (await workout.save()).populate('user')
    return res.status(201).json({
      workout
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find()
    return res.status(200).json({ workouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getPosts = async (req, res) => {
  try {
    const workouts = await Workout.find({ post: true })
      .populate('comments')
      .populate('exercises')
    return res.status(200).json({ workouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Workout.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Workout Deleted')
    }
    throw new Error('Workout not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(workout)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getWorkoutbyUserId = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.params.id })
    return res.status(200).json({ workouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getWorkoutById = async (req, res) => {
  try {
    const { id } = req.params
    const workout = await Workout.findById(id).populate('comments')
    if (workout) {
      return res.status(200).json({ workout })
    }
    return res.status(404).send('Workout with that id not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createWorkout,
  getWorkouts,
  getPosts,
  deleteWorkout,
  updateWorkout,
  getWorkoutbyUserId,
  getWorkoutById
}
