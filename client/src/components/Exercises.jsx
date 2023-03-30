import axios, { AxiosHeaders } from "axios"
import { useEffect, useState } from "react"
import Client from "../services/api"
const API_KEY = process.env.REACT_APP_NINJA_KEY

const Exercises = ({ user, setExercises, exerciseList }) => {

  const initialState = {
    name: '',
    sets: '',
    reps: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await Client.post(`http://localhost:3001/exercise/new`, formState)
    // setFormState(initialState)
    exerciseList.push(formState)
    setExercises(formState)
    setFormState(initialState)
  }

// const [exerciseList, setExerciseList] = useState()

// const exercises = []

//   const addLift = (exercise) => {
//     exercises.push(exercise)
//     console.log(exercises)
//   }

//   const getAbExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=abdominals', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getAbductorExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=abductors', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getAdductorExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=adductors', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getBicepExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getCalvesExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=calves', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getChestExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=chest', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getForearmExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=forearms', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getGluteExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=glutes', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getHamsExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=hamstrings', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getLatExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=lats', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getLowBackExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=lower_back', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getMidBackExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=middle_back', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getNeckExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=neck', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getQuadExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=quadriceps', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getTrapExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=traps', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
//   const getTricepExercises = async () => {
//     const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=triceps', {
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//     })
//     setExerciseList(response.data)
//   }
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
              id="name"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder=" ex: Bench Press"
              value={formState.name}
              />
        <label htmlFor="sets">sets: </label>
        <input
              id="sets"
              onChange={handleChange}
              name="sets"
              type="sets"
              value={formState.sets}
              />
        <label htmlFor="reps">reps: </label>
        <input
              id="reps"
              onChange={handleChange}
              name="reps"
              type="resps"
              value={formState.reps}
              />
              <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Exercise</button>
        </form>
      {/* <h2>Choose a Muscle To Work On</h2>
      <h5 onClick={getAbExercises}>Abs</h5>
      <h5 onClick={getAbductorExercises}>Abductors</h5>
      <h5 onClick={getAdductorExercises}>Adductors</h5>
      <h5 onClick={getBicepExercises}>Biceps</h5>
      <h5 onClick={getCalvesExercises}>Calves</h5>
      <h5 onClick={getChestExercises}>Chest</h5>
      <h5 onClick={getForearmExercises}>Forearms</h5>
      <h5 onClick={getGluteExercises}>Glutes</h5>
      <h5 onClick={getHamsExercises}>Hamstrings</h5>
      <h5 onClick={getLatExercises}>Lats</h5>
      <h5 onClick={getLowBackExercises}>Lower Back</h5>
      <h5 onClick={getMidBackExercises}>Middle Back</h5>
      <h5 onClick={getNeckExercises}>Neck</h5>
      <h5 onClick={getQuadExercises}>Quadriceps</h5>
      <h5 onClick={getTrapExercises}>Traps</h5>
      <h5 onClick={getTricepExercises}>Triceps</h5>
      <section>
        {exerciseList?.map((exercise) => (
          <div key={exercise.instructions}>
            <p>Name: {exercise.name}</p>
            {/* <p>Type: {exercise.type}</p> */}
            {/* <p>Equipment Needed: {exercise.equipment}</p>
            <p>Difficulty Level: {exercise.difficulty}</p>
            <p> Instructions: {exercise.instructions}</p>
            <button onClick={()=>addLift(exercise.name)} className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add To Workout</button>
          </div>
        ))}
      </section> */} 
    </div>
  )
}

export default Exercises