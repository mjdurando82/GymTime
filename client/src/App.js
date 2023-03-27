// import './App.css'
import './index.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Login from './pages/Login'
import Workout from './components/Workout'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
      console.log(user)
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
          <Route path="/workout" element={<Workout user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
