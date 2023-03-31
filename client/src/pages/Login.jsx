import logo from '../images/logo.png'
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
    <div className='bg-slate-400 min-h-screen pt-16'>
      <h1 className='text-5xl font-bold text-center mb-8'>STRENGTH</h1>
      <h5 className='text-xl font-bold text-center mb-2'>Workout Smarter</h5>
      <img className='mx-auto mb-6 w-1/4' src={logo} />

    <div>
      <div>
        {!register && (
          <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <h3 className='text-2xl font-bold mb-2'>Sign In</h3>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="email">Email</label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
              />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="password">Password</label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
              />
          </div>
          <div className='mb-4'>
          <button className="bg-slate-700 text-white py-2 px-3 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300" disabled={!formValues.email || !formValues.password}>
            Login
          </button>
          </div>
          <p className=' text-center text-gray-500 cursor-pointer hover:underline' onClick={toggleForm}> Don't Have An Account Click Here To Register!</p>
          <div className='text-center mt-4'>
          <p>email: admin@admin.com</p>
          <p>password: admin</p>
          </div>
        </form>
              )}
      </div>
    </div>
{/* Register */}
{register && (
  <form className='max-w-md mx-auto' onSubmit={handleRegistration}>
          <div className='mb-4'>
            <h3 className='text-2xl font-bold mb-2'>Register</h3>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="username">Username: </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleRegChange}
              name="username"
              type="username"
              placeholder="Username"
              value={regValues.username}
              required
              />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="email">Email: </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleRegChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={regValues.email}
              required
              />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="password">Password: </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleRegChange}
              type="password"
              name="password"
              value={regValues.password}
              required
              />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="confirmPassword">Confirm Password: </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
              onChange={handleRegChange}
              type="password"
              name="confirmPassword"
              value={regValues.confirmPassword}
              required
              />
          </div>

          <div className='mb-4'>
          <button className="bg-slate-700 text-white py-2 px-3 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300"
            disabled={
              !regValues.email ||
              (!regValues.password &&
                regValues.confirmPassword === regValues.password)
              }
              >
            Sign In
          </button>
          </div>
          <p className='text-center text-gray-500 cursor-pointer hover:underline' onClick={toggleForm}>Already Have An Account Click Here To Login!</p>
        </form>
      )}
      </div>
  )
}

export default  Login