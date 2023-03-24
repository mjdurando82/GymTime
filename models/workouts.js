const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: false },
    date: { type: Date, required: true },
    exercises: { type: Array, required: true },
    notes: { type: String, required: false },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Workout', Workout)
