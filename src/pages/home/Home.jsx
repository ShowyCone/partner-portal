import React from 'react'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import ChooseYourTrack from './components/ChooseYourTrack'
import BannerSection from './components/BannerSection'

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ChooseYourTrack />
      <BannerSection />
    </main>
  )
}

export default Home
