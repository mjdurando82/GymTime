const Comment = require('../models/comments')
const Workout = require('../models/workouts')
const User = require('../models/user')
const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.find()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsForWorkout = async (req, res) => {
  try {
    const comments = await Comment.find({ workout: req.params.id })
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    comment.save()
    const workout = await Workout.findById(req.body.workout)
    workout.comments.push(comment.id)
    await workout.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment Deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllComments,
  UpdateComment,
  CreateComment,
  DeleteComment,
  GetCommentsForWorkout
}
