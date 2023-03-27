import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const [user, setUser] = useState(null)
  const [register, setRegister] = useState(false)
  let navigate = useNavigate()
  let initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleRegistration = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    setRegister(true)
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
    <div>
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
            <label htmlFor="userName">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              value={formValues.userName}
              required
              />
          </div>
          <div>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
              />
          </div>
          <div>
          <button className='dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
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