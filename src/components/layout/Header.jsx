import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, NavLink } from 'react-router'

const Header = () => {
  const location = useLocation()

  return (
    <motion.header
      className='w-full min-h-20 px-6 flex justify-between items-center border-b-1 border-black/10'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex items-center space-x-8'>
        <Link to='/'>
          <img
            src='/rwamainlogo.svg'
            alt='Logo'
            className='h-8 object-contain'
          />
        </Link>

        <nav className='flex items-center space-x-6'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 font-medium ${
                isActive ? 'text-rwa' : 'text-gray-700 hover:text-rwa'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to='/discover'
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 font-medium ${
                isActive ? 'text-rwa' : 'text-gray-700 hover:text-rwa'
              }`
            }
          >
            Discover
          </NavLink>
        </nav>
      </div>

      <div className='flex items-center space-x-4'>
        <Link
          to='/login'
          className='text-gray-700 hover:text-rwa cursor-pointer transition-colors duration-200 font-medium'
        >
          Sign In
        </Link>
        <Link
          to='/login'
          className='bg-rwa text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium'
        >
          Sign Up
        </Link>
      </div>
    </motion.header>
  )
}

export default Header
