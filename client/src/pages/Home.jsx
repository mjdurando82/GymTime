import axios, { AxiosHeaders } from "axios"
import { useEffect } from "react"

const API_KEY = process.env.REACT_APP_NINJA_KEY

const Home = () => {
  
  // const getExercises = async () => {
  //   const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps')
  //   console.log(response)
  // }
  
  // useEffect(() => {
  //   getExercises()
  // },[])

  return (
    <h2>Home Page</h2>
  )
}

export default Home