const mongoose = require('mongoose')
const comments = require('./comments')
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: false },
    date: { type: Date, required: true },
    notes: { type: String, required: false },
    image: { type: String, required: false },
    post: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Workout', Workout)
