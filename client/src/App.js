import './App.css'
import './index.css'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Nav from './components/Nav'
import History from './pages/History'
import Workout from './components/Workout'
import { useEffect, useState } from 'react'
import axios, { AxiosHeaders } from 'axios'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'
import Exercises from './components/Exercises'

const API_KEY = process.env.REACT_APP_NINJA_KEY

const App = () => {
  const [user, setUser] = useState(null)

  const [abs, setAbs] = useState()
  const [abdductors, setAbductors] = useState()
  const [addductors, setAdductors] = useState()
  const [bis, setBis] = useState()
  const [calves, setCalves] = useState()
  const [chest, setChest] = useState()
  const [forearms, setForearms] = useState()
  const [glutes, setGlutes] = useState()
  const [hams, setHams] = useState()
  const [lats, setLats] = useState()
  const [lowBack, setLowBack] = useState()
  const [midBack, setMidBack] = useState()
  const [neck, setNeck] = useState()
  const [quads, setQuads] = useState()
  const [traps, setTraps] = useState()
  const [tris, setTris] = useState()

  const getAbExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=abdominals',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setAbs(response.data)
  }
  const getAbductorExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=abductors',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setAbductors(response.data)
  }
  const getAdductorExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=adductors',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setAdductors(response.data)
  }
  const getBicepExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=biceps',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setBis(response.data)
  }
  const getCalvesExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=calves',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setCalves(response.data)
  }
  const getChestExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=chest',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setChest(response.data)
  }
  const getForearmExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=forearms',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setForearms(response.data)
  }
  const getGluteExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=glutes',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setGlutes(response.data)
  }
  const getHamsExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=hamstrings',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setHams(response.data)
  }
  const getLatExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=lats',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setLats(response.data)
  }
  const getLowBackExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=lower_back',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setLowBack(response.data)
  }
  const getMidBackExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=middle_back',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setMidBack(response.data)
  }
  const getNeckExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=neck',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setNeck(response.data)
  }
  const getQuadExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=quadriceps',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setQuads(response.data)
  }
  const getTrapExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=traps',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setTraps(response.data)
  }
  const getTricepExercises = async () => {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=triceps',
      {
        headers: {
          'X-Api-Key': API_KEY
        }
      }
    )
    setTris(response.data)
  }

  useEffect(() => {
    getAbExercises()
    getAbductorExercises()
    getAdductorExercises()
    getBicepExercises()
    getCalvesExercises()
    getChestExercises()
    getForearmExercises()
    getGluteExercises()
    getHamsExercises()
    getLatExercises()
    getLowBackExercises()
    getMidBackExercises()
    getNeckExercises()
    getQuadExercises()
    getTrapExercises()
    getTricepExercises()
  }, [])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div>
      <Nav handleLogout={handleLogOut} user={user} />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route
            path="/workout"
            element={
              <Workout
                user={user}
                abs={abs}
                abdductors={abdductors}
                addductors={addductors}
                bis={bis}
                calves={calves}
                chest={chest}
                forearms={forearms}
                glutes={glutes}
                hams={hams}
                lats={lats}
                lowBack={lowBack}
                midBack={midBack}
                neck={neck}
                quads={quads}
                traps={traps}
                tris={tris}
              />
            }
          />
          <Route path="/feed" element={<Feed />} />
          <Route path="/history" element={<History user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
