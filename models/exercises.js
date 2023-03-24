const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exercise = new Schema(
  {
    workout: { type: Schema.Types.ObjectId, ref: 'Workout' },
    name: { type: String, required: false },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Exercise', Exercise)
