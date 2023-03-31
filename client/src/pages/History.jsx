import Client from "../services/api"
import { useEffect, useState } from "react"

const History = ({ user }) => {

  const [workouts, setWorkouts] = useState()

    const getWorkoutsForUser = async () => {
      // if (user){
        const response = await Client.get(`http://localhost:3001/workout/user/${user.id}`)
        setWorkouts(response.data.workouts)
      // }
      console.log(user)
  }

  useEffect(() => {
    getWorkoutsForUser()
  }, [])

  const deleteWorkout = async (e, workoutId) => {
    const response = await Client.delete(`http://localhost:3001/workout/delete/${workoutId}`)
    getWorkoutsForUser()
  }
  
  return (
    <div className='bg-slate-400 min-h-screen'>
      <h2 className="text-2xl font-bold mb-4 pt-16">Your Workout History</h2>
        {workouts?.map((workout) => (
        <div className="mb-4" key={workout._id}>
          <p>{new Date(workout.date).toLocaleDateString()}</p>
          <p>{workout.name}</p>
          {workout.exercises.map((exercise) => (
            <>
          <p>{exercise.name} {exercise.sets} x {exercise.reps}</p>
            </>
          ))}
          <p>Notes: {workout.notes}</p>
          <img src={workout.image} />
          <div>
            <button className="bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={(e) => deleteWorkout(e, workout._id)}>Delete</button>
          </div>
      </div>
        ))}
    </div>
  )
}
export default History