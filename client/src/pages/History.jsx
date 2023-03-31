import Client from "../services/api"
import { useEffect, useState } from "react"
import UpdateWorkout from "../components/UpdateWorkout"

const History = ({ user }) => {

  const [workouts, setWorkouts] = useState()
  const [buttons, setButtons] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDate, setWorkoutDate] = useState(new Date())
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseSets, setExerciseSets] = useState('')
  const [exerciseReps, setExerciseReps] = useState('')
  const [exerciseWeight, setExerciseWeight] = useState('')
  const [exercises, setExercises] = useState([])
  const [post, setPost] = useState(true)
  const [notes, setNotes] = useState()
  const [image, setImage] = useState()

    const getUserWorkouts = async () => {
      // if (user){
        const response = await Client.get(`http://localhost:3001/workout/user/${user.id}`)
        setWorkouts(response.data.workouts)
      // }
  }

    if (user) {
      getUserWorkouts()
    }


  const toggleButtons = () => {
    if (buttons === false){
      setButtons(true)
    }
    else setButtons(false)
  }

  const toggleUpdate = () => {
    if (updating === false){
      setUpdating(true)
    }
    else setUpdating(false)
  }

  const handleAddExercise = (e) => {
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
    const removed = exercises.filter((_, i) => i !== index)
    setExercises(removed)
  }


  const deleteWorkout = async (e, workoutId) => {
    const response = await Client.delete(`http://localhost:3001/workout/delete/${workoutId}`)
    getUserWorkouts()
  }
  const updateWorkout = async (e, workoutId) => {
    e.preventDefault()
    const updatedWorkout = {
      user: user.id,
      name: workoutName,
      date: workoutDate,
      notes: notes,
      image: image,
      post: post,
      exercises: exercises
    }
        await Client.put(`http://localhost:3001/workout/update/${workoutId}`, updatedWorkout)
        getUserWorkouts()
        setUpdating(false)
  }
  
  return (
    <div className='bg-slate-400 min-h-screen'>
      <h2 className="text-2xl font-bold mb-4 pt-16">Your Workout History</h2>
      <div className="flex flex-wrap justify-evenly m-5"> 
        {workouts?.map((workout) => (
          <div className="bg-white rounded-lg p-4 mb-4 flex items-center" key={workout._id}>
            <img className="my-2 ml-4 mr-8 rounded" src={workout.image} />
            <div className="flex-1">
              <p className="mb-1">{new Date(workout.date).toLocaleDateString()}</p>
              <p className="font-medium mb-2">{workout.name}</p>
              {workout.exercises.map((exercise) => (
                <div key={exercise._id}>
                  <p className="text-gray-800">{exercise.name} {exercise.sets} x {exercise.reps}</p>
                </div>
              ))}
              <p className="text-gray-800">Notes: {workout.notes}</p>
              {buttons && (
                <div>
                  <button className="bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={(e) => deleteWorkout(e, workout._id)}>Delete</button>
                  <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300" onClick={()=>toggleUpdate()}>Edit</button>
                </div>
              )}
            </div>
        <div>
          {updating && (
            <form onSubmit={(e)=>updateWorkout(e, workout._id)}>

            <div className="mb-4 font-bold text-gray-800">
              <label className='block font-bold text-gray-900'  htmlFor="workoutName">Workout Name:</label>
              <input
              className='appearance-none border rounded text-gray-700 leading-tight'
              id="workoutName"
              type="text"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              />
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
                <label className='block font-bold text-gray-900' htmlFor="workoutDate">Workout Date:</label>
                <input
                className='appearance-none border rounded text-gray-700 leading-tight'
                id="workoutDate"
                type="date"
                value={workoutDate.toISOString().slice(0, 10)}
                onChange={(e) => setWorkoutDate(new Date(e.target.value))}
                />
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
              <label className='block font-bold text-gray-900' htmlFor="notes">Notes:</label>
              <input
              className='appearance-none border rounded text-gray-700 leading-tight'
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              />
    
              </div>
              <div className="mb-4 font-bold text-gray-800">
              <label className='block font-bold text-gray-900' htmlFor="notes">Image:</label>
              <input
              className='appearance-none border rounded text-gray-700 leading-tight'
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              />
              </div>
              
              <div className='mb-4 font-bold text-gray-800'>
                <label className='block font-bold text-gray-900' htmlFor="post">Do you want to post this workout? </label>
                <select className='border rounded text-gray-700 leading-tight'
                id="post" onChange={(e) => setPost(e.target.value)} value={post}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
                <label className='block font-bold text-gray-900' htmlFor="exerciseName">Exercise Name:</label>
                <input
                className='appearance-none border rounded text-gray-700 leading-tight'
                id="exerciseName"
                type="text"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                />
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
                <label className='block font-bold text-gray-900' htmlFor="exerciseSets">Sets:</label>
                <input
                className='appearance-none border rounded text-gray-700 leading-tight'
                id="exerciseSets"
                type="number"
                value={exerciseSets}
                onChange={(e) => setExerciseSets(e.target.value)}
                />
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
                <label className='block font-bold text-gray-900' htmlFor="exerciseReps">Reps:</label>
                <input
                className='appearance-none border rounded text-gray-700 leading-tight'
                id="exerciseReps"
                type="text"
                value={exerciseReps}
                onChange={(e) => setExerciseReps(e.target.value)}
                />
              </div>
    
              <div className="mb-4 font-bold text-gray-800">
                <label className='block font-bold text-gray-900' htmlFor="exerciseWeight">Weight:</label>
                <input
                className='appearance-none border rounded text-gray-700 leading-tight'
                id="exerciseWeight"
                type="number"
                value={exerciseWeight}
                onChange={(e) => setExerciseWeight(e.target.value)}
                />
              </div>
    
            <div className='mb-4'>
              <p className='font-bold text-gray-800'>Exercises</p>
              <div>
                {exercises.map((exercise, index) => (
                  <div className='flex'>
                  <p key={exercise.id}>
                  {exercise.name}: {exercise.sets} x {exercise.reps} {exercise.weight}lbs
                  </p>
                  <button className="ml-4 bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={()=>removeExercise(index)}>X</button>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-4'>
              <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" onClick={handleAddExercise}>Add Exercise</button>
            </div>
    
            <button className="bg-slate-700 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" type="submit">Save Workout</button>
          </form>
                )}
            </div>
          </div>
        ))}
      </div>
      <div>
        {!buttons && (
          <button onClick={()=>toggleButtons()} className="bg-slate-700 text-white py-1 px-2 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300">Open Editor</button>
        )}
        {buttons && (
          <button onClick={()=>toggleButtons()} className="bg-slate-700 text-white py-1 px-2 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300">Close Editor</button>
        )}
      </div>    
      </div>
  )
}
export default History