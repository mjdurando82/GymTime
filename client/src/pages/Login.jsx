import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'


const Login = ({ setUser }) => {

  const [register, setRegister] = useState(false)

  let navigate = useNavigate()

  let initialState = { username: '', password: '' }

  let regInitialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '' 
}
  const [formValues, setFormValues] = useState(initialState)

  const [regValues, setRegValues] = useState(regInitialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleRegChange = (e) => {
    setRegValues({ ...regValues, [e.target.name]: e.target.value })
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: regValues.username,
      email: regValues.email,
      password: regValues.password
    })
    setRegValues(regInitialState)
    setRegister(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/home')
  }

  const toggleForm = () => {
    if(register === true) {
      setRegister(false)
    } else if(register === false) {
      setRegister(true)
    }
  }

  return (
    <div className='pt-16'>
    <div>
      <div>
        {!register && (
          <form onSubmit={handleSubmit}>
          <div>
            <h3>Sign In</h3>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
              />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
              />
          </div>
          <div>
          <button className='dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' disabled={!formValues.email || !formValues.password}>
            Login
          </button>
          </div>
          <p onClick={toggleForm}>Don't Have An Account Click Here To Register!</p>
        </form>
              )}
      </div>
    </div>
{/* Register */}
{register && (
  <form onSubmit={handleRegistration}>
          <div>
            <h3>Register</h3>
            <label htmlFor="username">Username: </label>
            <input
              onChange={handleRegChange}
              name="username"
              type="username"
              placeholder="Username"
              value={regValues.username}
              required
              />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleRegChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={regValues.email}
              required
              />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={handleRegChange}
              type="password"
              name="password"
              value={regValues.password}
              required
              />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              onChange={handleRegChange}
              type="password"
              name="confirmPassword"
              value={regValues.confirmPassword}
              required
              />
          </div>
          <div>
          <button className='dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            disabled={
              !regValues.email ||
              (!regValues.password &&
                regValues.confirmPassword === regValues.password)
              }
              >
            Sign In
          </button>
          </div>
          <p onClick={toggleForm}>Already Have An Account Click Here To Login!</p>
        </form>
      )}
      </div>
  )
}

export default  Login