// import { useState } from "react"
// import Client from "../services/api"
// import Exercises from "./Exercises"


// const Workout = ({ user, abs, abdductors, addductors, bis, calves, chest, forearms, glutes, hams, lats, lowBack, midBack, neck, quads, traps, tris }) => {

  
//   const [exercises, setExercises] = useState([])
  
//   const initialState = {
//     user: user?.id,
//     name: '',
//     date: '',
//     notes: '',
//     image: '',
//     post: true
//   }
  
//   let exerciseList = []
  
//     const [formState, setFormState] = useState(initialState)

//   const handleChange = (e) => {
//     setFormState({...formState, [e.target.id]: e.target.value})
//     console.log(exerciseList)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     // await Client.post(`http://localhost:3001/workout/new`, formState)
//     // setFormState(initialState)
//     exerciseList.push(formState)
//   }

//   return (
//     <main className="">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name: </label>
//         <input
//               id="name"
//               onChange={handleChange}
//               name="name"
//               type="text"
//               placeholder=" ex:Chest Day"
//               value={formState.name}
//               />
//         <label htmlFor="date">Date: </label>
//         <input
//               id="date"
//               onChange={handleChange}
//               name="date"
//               type="date"
//               value={formState.date}
//               />
//         <label htmlFor="notes">Notes: </label>
//         <input
//               id="notes"
//               onChange={handleChange}
//               name="notes"
//               type="text"
//               placeholder=" ex:Felt great today!"
//               value={formState.notes}
//               />
//         <label htmlFor="image">Image: </label>
//         <input
//               id="image"
//               onChange={handleChange}
//               name="image"
//               type="text"
//               placeholder="Image Here"
//               value={formState.image}
//               />
//         <label htmlFor="post">Do you want to post this workout? </label>
//         <select id="post" onChange={handleChange} value={formState.post}>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//         </select>
//       </form>
//       <section>
//         {exerciseList?.map((exercise)=> (
//           <>
//           <p>{exercise.name}</p>
//           <p>{exercise.sets}</p>
//           <p>X {exercise.reps}</p>
//           </>
//         ))}
//         <h4>Add Exercises</h4>
//         <Exercises user={user} exerciseList={exerciseList} setExercises={setExercises}/> 
//         <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Workout</button>
//       </section>
//     </main>
//   )
// }

// export default Workout

import React, { useState, useEffect } from 'react'

import Client from "../services/api"


const Workout = () => {
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDate, setWorkoutDate] = useState(new Date())
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseSets, setExerciseSets] = useState('')
  const [exerciseReps, setExerciseReps] = useState('')
  const [exercises, setExercises] = useState([])
  const [post, setPost] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = {
      name: workoutName,
      date: workoutDate,
      exercises: exercises.map((exercise) => exercise._id),
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
          <label htmlFor="post">Do you want to post this workout? </label>
          <select id="post" onChange={(e) => setPost(e.target.value)} value={post}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" onClick={handleAddExercise}>Add Exercise</button>

        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              {exercise.name}: {exercise.sets} x {exercise.reps}
            </li>
          ))}
        </ul>

        <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" type="submit">Save Workout</button>
      </form>
    </div>
  )
}

export default Workout
