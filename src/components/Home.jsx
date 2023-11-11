import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Experience/>
    </>
  )
}

export default Home