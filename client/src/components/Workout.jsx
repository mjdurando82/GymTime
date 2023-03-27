import { useState } from "react"


const Workout = ({ user }) => {

  
  const [workout, setWorkout] = useState()
  
  const initialState = {
    user: user,
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
              />
        <label htmlFor="date">Date: </label>
        <input
              onChange={handleChange}
              name="date"
              type="date"
              value={formState.date}
              />
        <label htmlFor="exercises">Exercises: </label>
        <input
              onChange={handleChange}
              name="exercises"
              type="exercises"
              placeholder="Choose Your Exercises"
              value={formState.exercises}
              />
        <label htmlFor="notes">Notes: </label>
        <input
              onChange={handleChange}
              name="notes"
              type="text"
              placeholder=" ex:Felt great today!"
              value={formState.notes}
              />
        <label htmlFor="image">Image: </label>
        <input
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
      </form>
    </main>
  )
}

export default Workout