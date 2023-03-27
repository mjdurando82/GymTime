import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='navbar'>
      <header>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/workout'>Workout</NavLink>
        <NavLink to='/history'>History</NavLink>
      </header>
    </nav>
  )
}

export default Nav