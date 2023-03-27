import Client from "../services/api"
import { useEffect, useState } from "react"

const History = ({ user }) => {

  const [workouts, setWorkouts] = useState()

    const getWorkoutsForUser = async () => {
    const response = await Client.get(`http://localhost:3001/workout/user/${user.id}`)
    setWorkouts(response.data.workouts)
  }

  if (user) {
    getWorkoutsForUser()
  }
    
  return (
    <div>
      <h3>Past Workouts Here</h3>
        {workouts?.map((workout) => (
      <div key={workout._id}>
          <p>{workout.name}</p>
          <p>{workout.exercises}</p>
          <p>{workout.notes}</p>
          <p>{workout.image}</p>
          <p>{workout.date}</p>
      </div>
        ))}
    </div>
  )
}
export default History