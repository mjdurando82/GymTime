const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    workout: { type: Schema.Types.ObjectId, ref: 'Workouts' },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
