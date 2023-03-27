import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {

  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-900'>
    {/* {user && ( */}
          <header className='container flex flex-wrap items-center justify-evenly'>
      <Link to='/home'>Home</Link>
      <Link to='/workout'>Workout</Link>
      <Link to='/history'>History</Link>
      <Link to='/social'>Feed</Link>
      <Link onClick={handleLogout} to='/'>Sign Out</Link>
      </header>
      {/* )} */}
      </nav>
      )
    }

export default Nav
