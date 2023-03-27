import { useState } from "react"


const Workout = ({ user }) => {

  
  const [workout, setWorkout] = useState()
  
  const initialState = {
    user: user,
    name: '',
    date: '',
    exercises: [],
    notes: '',
    image: ''
  }
  
    const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }


  return (
    <main>
      <form>
        <label htmlFor="name">Name: </label>
        <input
              onChange={handleChange}
              name="name"
              type="name"
              placeholder=" ex:Chest Day"
              value={formState.name}
              required
              />
        <label htmlFor="date">Date: </label>
        <input
              onChange={handleChange}
              name="date"
              type="date"
              value={formState.date}
              required
              />
        <label htmlFor="exercises">Exercises: </label>
        <input
              onChange={handleChange}
              name="exercises"
              type="exercises"
              placeholder="Choose Your Exercises"
              value={formState.exercises}
              required
              />
        <label htmlFor="notes">Notes: </label>
        <input
              onChange={handleChange}
              name="notes"
              type="text"
              placeholder=" ex:Felt great today!"
              value={formState.notes}
              required
              />
        <label htmlFor="image">Image: </label>
        <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="Image Here"
              value={formState.image}
              required
              />
      </form>
    </main>
  )
}

export default Workout