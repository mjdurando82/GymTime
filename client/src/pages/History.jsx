import Client from "../services/api"
import { useEffect, useState } from "react"

const History = ({ user }) => {

  const [workouts, setWorkouts] = useState()

    const getWorkoutsForUser = async () => {
    const response = await Client.get(`http://localhost:3001/workout/user/${user.id}`)
    setWorkouts(response.data.workouts)
  }

  useEffect(() => {
    getWorkoutsForUser()
  }, [])
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 pt-16">Your Workout History</h2>
        {workouts?.map((workout) => (
      <div className="mb-4" key={workout._id}>
          <p>{workout.name}</p>
          {workout.exercises.map((exercise) => (
            <>
          <p>{exercise.name} {exercise.sets} x {exercise.reps}</p>
            </>
          ))}
          <p>Notes: {workout.notes}</p>
          <p>{workout.image}</p>
          <p>{workout.date}</p>
      </div>
        ))}
    </div>
  )
}
export default History