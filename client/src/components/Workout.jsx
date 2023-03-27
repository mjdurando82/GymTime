import { useState } from "react"
import Client from "../services/api"


const Workout = ({ user }) => {

  
  const [workout, setWorkout] = useState()
  
  const initialState = {
    user: user?.id,
    name: '',
    date: '',
    exercises: [],
    notes: '',
    image: '',
    post: true
  }
  
    const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`http://localhost:3001/workout/new`, formState)
    setFormState(initialState)
  }


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
              id="name"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder=" ex:Chest Day"
              value={formState.name}
              />
        <label htmlFor="date">Date: </label>
        <input
              id="date"
              onChange={handleChange}
              name="date"
              type="date"
              value={formState.date}
              />
        <label htmlFor="exercises">Exercises: </label>
        <input
              id="exercises"
              onChange={handleChange}
              name="exercises"
              type="text"
              placeholder="Choose Your Exercises"
              value={formState.exercises}
              />
        <label htmlFor="notes">Notes: </label>
        <input
              id="notes"
              onChange={handleChange}
              name="notes"
              type="text"
              placeholder=" ex:Felt great today!"
              value={formState.notes}
              />
        <label htmlFor="image">Image: </label>
        <input
              id="image"
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="Image Here"
              value={formState.image}
              />
        <label htmlFor="post">Do you want to post this workout? </label>
        <select id="post" onChange={handleChange} value={formState.post}>
              <option value="true">Yes</option>
              <option value="false">No</option>
        </select>
        <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Workout</button>
      </form>
    </main>
  )
}

export default Workout