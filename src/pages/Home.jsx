import React from 'react'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <>
    <Hero/>
    <Skills/>
    <About/>
    <Projects/>
    <Experience/>
    <Achievements/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home