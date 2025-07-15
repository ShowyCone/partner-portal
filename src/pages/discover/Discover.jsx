import React from 'react'
import Hero from './components/Hero'
import AllServices from './components/AllServices'

const Discover = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Hero />
      <AllServices />
    </main>
  )
}

export default Discover
