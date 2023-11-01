import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useHomeContext } from '../ContextAPI/Context/HomeContext'
import { logOut } from '../Firebase/Firebase';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useHomeContext();

  async function handleLogout() {
    await logOut()
    setIsLoggedIn(false)
  }

  return (
    <div className='flex justify-between items-center p-4 border-b shadow-sm'>
      <Link to='/'>Logo</Link>
      {!isLoggedIn ? (
        <div className='flex items-center gap-4'>
          <NavLink className={({ isActive }) =>
            ` ${isActive ? 'text-orange-700' : 'text-gray-700'}
          hover:text-orange-700
          `} to='/login'>
            Login
          </NavLink>
          <NavLink className={({ isActive }) =>
            ` ${isActive ? 'text-orange-700' : 'text-gray-700'}
          hover:text-orange-700
          `} to='/signup'>
            Signup
          </NavLink>
        </div>
      ) : (
        <div className='cursor-pointer' onClick={handleLogout}>
          Logout
        </div>
      )}
    </div>
  )
}

export default Header