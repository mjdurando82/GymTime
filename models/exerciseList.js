const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseList = new Schema(
  {
    workout: { type: Schema.Types.ObjectId, ref: 'Workout' },
    name: { type: String, required: true },
    type: { type: String, required: true },
    muscle: { type: String, required: true },
    equipment: { type: String, required: true },
    difficulty: { type: String, required: true },
    instructions: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('ExerciseList', ExerciseList)
