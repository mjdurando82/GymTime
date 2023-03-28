const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: false },
    date: { type: Date, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
    notes: { type: String, required: false },
    image: { type: String, required: false },
    post: { type: Boolean, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Workout', Workout)
