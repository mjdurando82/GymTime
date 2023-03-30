import React, { useState, useEffect } from 'react'

import Client from "../services/api"


const Workout = ({ user }) => {
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDate, setWorkoutDate] = useState(new Date())
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseSets, setExerciseSets] = useState('')
  const [exerciseReps, setExerciseReps] = useState('')
  const [exercises, setExercises] = useState([])
  const [post, setPost] = useState(true)
  const [notes, setNotes] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = {
      user: user.id,
      name: workoutName,
      date: workoutDate,
      exercises: exercises,
      notes: notes,
      post: post,
    }
    await Client.post(`http://localhost:3001/workout/new`, workout)
    setWorkoutName('')
    setWorkoutDate(new Date())
    setExercises([])
  }


  const handleAddExercise = (e) => {
    e.preventDefault()
    const exercise = {
      name: exerciseName,
      sets: exerciseSets,
      reps: exerciseReps,
    }
    setExercises([...exercises, exercise])
    setExerciseName('')
    setExerciseSets('')
    setExerciseReps('')
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 pt-16">Workout Tracker</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="workoutName">Workout Name:</label>
          <input
          id="workoutName"
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          />
          </div>

          <div className="mb-4">
            <label htmlFor="workoutDate">Workout Date:</label>
            <input
            id="workoutDate"
            type="date"
            value={workoutDate.toISOString().slice(0, 10)}
            onChange={(e) => setWorkoutDate(new Date(e.target.value))}
            />
          </div>

          <div className="mb-4">
          <label htmlFor="notes">Notes:</label>
          <input
          id="notes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          />
          </div>
          
          <div className='mb-4'>
            <label htmlFor="post">Do you want to post this workout? </label>
            <select id="post" onChange={(e) => setPost(e.target.value)} value={post}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="exerciseName">Exercise Name:</label>
            <input
            id="exerciseName"
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exerciseSets">Sets:</label>
            <input
            id="exerciseSets"
            type="number"
            value={exerciseSets}
            onChange={(e) => setExerciseSets(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exerciseReps">Reps:</label>
            <input
            id="exerciseReps"
            type="number"
            value={exerciseReps}
            onChange={(e) => setExerciseReps(e.target.value)}
            />
          </div>

        <div className='mb-4'>
          <ul>
            {exercises.map((exercise, index) => (
            <li key={index}>
              {exercise.name}: {exercise.sets} x {exercise.reps}
              </li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" onClick={handleAddExercise}>Add Exercise</button>
        </div>

        <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" type="submit">Save Workout</button>
      </form>
    </div>
  )
}

export default Workout
