import React from 'react'
import About from '../components/About/About'
import Courses from '../components/Courses/Courses'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ImgCarousel from '../components/ImgCarousel/ImgCarousel'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className="app__homepage">
        <Navbar />
        <Hero />
        <About />
        <Courses />
        <ImgCarousel />
        <Footer />
    </div>
  )
}

export default HomePage