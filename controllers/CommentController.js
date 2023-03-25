const Comment = require('../models/comments')

const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.find()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetAllCommentsForWorkout = async (req, res) => {
  try {
    let workoutId = parseInt(req.params.workout_id)
    const workoutComments = await Comment.findAll({ workout_id: workoutId })
    res.send(workoutComments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let workoutId = parseInt(req.params.workout_id)
    let commentBody = {
      userId,
      workoutId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
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
  GetAllCommentsForWorkout
}
