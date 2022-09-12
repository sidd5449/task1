import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className="app__homepage">
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default HomePage