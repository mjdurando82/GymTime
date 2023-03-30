import { Link } from 'react-router-dom'



const Home = ({ user }) => {
  console.log(user)
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
      <img
        src='https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg'
        alt='Fitness App'
        className='mb-8 w-64 md:w-96'
      />
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8'>
        Welcome, {user?.email}!
      </h1>
      <p className='text-xl md:text-2xl text-gray-600 mb-12'>
        Start tracking your workouts today.
      </p>
      <Link
        to='/workout'
        className='bg-blue-600 text-white py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-blue-700 transition-all duration-300'
      >
        Start Workout
      </Link>
      <Link
        to='/history'
        className='bg-gray-200 text-gray-800 py-3 px-8 rounded-md font-medium text-lg md:text-xl hover:bg-gray-300 transition-all duration-300 mt-4'
      >
        View History
      </Link>
    </div>
  )
}

export default Home
