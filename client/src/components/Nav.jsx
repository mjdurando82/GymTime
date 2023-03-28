import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {

  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-700 '>
    {/* {user && ( */}
          <header className='container flex flex-wrap items-center justify-evenly'>
      <Link to='/home' className='hover:text-blue-700'>Home</Link>
      <Link to='/workout' className='hover:text-blue-700'>Workout</Link>
      <Link to='/history' className='hover:text-blue-700'>History</Link>
      <Link to='/feed' className='hover:text-blue-700'>Feed</Link>
      <Link onClick={handleLogout} to='/' className='hover:text-blue-700'>Sign Out</Link>
      </header>
      {/* )} */}
      </nav>
      )
    }

export default Nav
