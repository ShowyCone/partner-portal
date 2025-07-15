import React from 'react'
import Hero from './components/Hero'
import AllServices from './components/AllServices'
import SuggestedServicesSection from './components/SuggestedServicesSection'
import CTABanner from './components/CTABanner'

const Discover = () => {
  return (
    <main className='flex flex-col'>
      <Hero />
      <AllServices />
      <SuggestedServicesSection />
      <CTABanner />
    </main>
  )
}

export default Discover
