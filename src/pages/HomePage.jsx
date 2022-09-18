import React from 'react'
import About from '../components/About/About'
import Courses from '../components/Courses/Courses'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Slideshow from '../components/Slideshow/Slideshow'

const HomePage = () => {
  return (
    <div className="app__homepage">
        <Navbar />
        <Hero />
        <About />
        <Courses />
        <Slideshow />
    </div>
  )
}

export default HomePage