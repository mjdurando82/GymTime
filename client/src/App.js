import './App.css'
import Login from './pages/Login'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
