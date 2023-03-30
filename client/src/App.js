import './App.css'
import './index.css'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Nav from './components/Nav'
import History from './pages/History'
import Workout from './components/Workout'
import { useEffect, useState } from 'react'
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
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div>
      <Nav user={user} handleLogout={handleLogOut} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/workout" element={<Workout user={user} />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/history" element={<History user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
