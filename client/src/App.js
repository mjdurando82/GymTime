import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
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
    }
  }, [])

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
