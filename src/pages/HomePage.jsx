import React from 'react'
import About from '../components/About/About'
import Courses from '../components/Courses/Courses'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className="app__homepage">
        <Navbar />
        <Hero />
        <About />
        <Courses />
    </div>
  )
}

export default HomePage