import React from 'react'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Menu from './components/Menu'
import Experience from './components/Experience'
import ComboDeal from './components/ComboDeal'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-noise min-h-screen text-white flex flex-col">
      <Hero />
      <StatsBar />
      <Menu />
      <Experience />
      <ComboDeal />
      <Testimonials />
      <Story />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
