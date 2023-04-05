import { useState, useEffect } from 'react'

import Client from "../services/api"


const Workout = ({ user }) => {
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDate, setWorkoutDate] = useState(new Date())
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseSets, setExerciseSets] = useState('')
  const [exerciseReps, setExerciseReps] = useState('')
  const [exerciseWeight, setExerciseWeight] = useState('')
  const [exercises, setExercises] = useState([])
  const [post, setPost] = useState(true)
  const [notes, setNotes] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = {
      user: user.id,
      name: workoutName,
      date: workoutDate,
      notes: notes,
      image: image,
      post: post,
      exercises: exercises
    }
    await Client.post(`/api/workout/new`, workout)
    setWorkoutName('')
    setWorkoutDate(new Date())
    setExercises([])
    setImage('')
    setNotes('')
  }

  const addExercise = (e) => {
    e.preventDefault()
    const exercise = {
      name: exerciseName,
      sets: exerciseSets,
      reps: exerciseReps,
      weight: exerciseWeight,
    }
    setExercises([...exercises, exercise])
    setExerciseName('')
    setExerciseSets('')
    setExerciseReps('')
    setExerciseWeight('')
  }
  
  const removeExercise = (index) => {
    const remove = exercises.filter((exercise, i) => i !== index)
    setExercises(remove)
  }

  return (
  <div className='bg-slate-400 min-h-screen'>
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4 pt-16 text-gray-900">Workout Tracker</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 m-10 bg-gray-100 rounded-lg shadow-lg p-8">
      <div className="col-span-2">
        <label htmlFor="workoutName" className="block font-bold text-gray-700 mb-2">
          Workout Name
        </label>
        <input
          id="workoutName"
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="workoutDate" className="block font-bold text-gray-700 mb-2">
          Workout Date
        </label>
        <input
          id="workoutDate"
          type="date"
          value={workoutDate}
          onChange={(e) => setWorkoutDate(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="notes" className="block font-bold text-gray-700 mb-2">
          Notes
        </label>
        <input
          id="notes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="image" className="block font-bold text-gray-700 mb-2">
          Image
        </label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="post" className="block font-bold text-gray-700 mb-2">
          Would you like to post this workout?
        </label>
        <select
          id="post"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="col-span-2">
        <label htmlFor="exerciseName" className="block font-bold text-gray-700 mb-2">
          Exercise Name
        </label>
            <input
            id="exerciseName"
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 font-bold text-gray-800">
            <label className='block font-bold text-gray-900' htmlFor="exerciseSets">Sets</label>
            <input
            id="exerciseSets"
            type="number"
            value={exerciseSets}
            onChange={(e) => setExerciseSets(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 font-bold text-gray-800">
            <label className='block font-bold text-gray-900' htmlFor="exerciseReps">Reps</label>
            <input
            id="exerciseReps"
            type="text"
            value={exerciseReps}
            onChange={(e) => setExerciseReps(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 font-bold text-gray-800">
            <label className='block font-bold text-gray-900' htmlFor="exerciseWeight">Weight</label>
            <input
            id="exerciseWeight"
            type="number"
            value={exerciseWeight}
            onChange={(e) => setExerciseWeight(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>

        <div className='mb-4'>
          <p className='font-bold text-gray-800'>Exercises</p>
          <div>
            {exercises.map((exercise, index) => (
              <div className='flex'>
              <p key={index}>
              {exercise.name}: {exercise.sets} x {exercise.reps} {exercise.weight}lbs
              </p>
              <button type='button' className="ml-4 bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={()=>removeExercise(index)}>X</button>
              </div>
            ))}
          </div>
        </div>

        <div className='w-1/2 mb-4 col-span-2'>
          <button className="sticky bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" onClick={addExercise}>Add Exercise</button>
        </div>
      <div>
        <button type='submit' className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300">Save Workout</button>
      </div>
      </form>
    </div>
</div>
  )
}

export default Workout
