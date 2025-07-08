import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router'

const Header = () => {
  const location = useLocation()

  return (
    <motion.header
      className='w-full min-h-20 px-6 flex justify-between items-center'
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
          <Link
            to='/'
            className={`cursor-pointer transition-colors duration-200 font-medium ${
              location.pathname === '/'
                ? 'text-rwa'
                : 'text-gray-700 hover:text-rwa'
            }`}
          >
            Home
          </Link>
          <Link
            to='/discover'
            className={`cursor-pointer transition-colors duration-200 font-medium ${
              location.pathname === '/discover'
                ? 'text-rwa'
                : 'text-gray-700 hover:text-rwa'
            }`}
          >
            Discover
          </Link>
        </nav>
      </div>

      <div className='flex items-center space-x-4'>
        <button className='text-gray-700 hover:text-rwa cursor-pointer transition-colors duration-200 font-medium'>
          Sign In
        </button>
        <button className='bg-rwa text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium'>
          Sign Up
        </button>
      </div>
    </motion.header>
  )
}

export default Header
