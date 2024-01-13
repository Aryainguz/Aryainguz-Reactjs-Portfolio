import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Skills/>
    <About/>
    <Achievements/>
    <Experience/>
    <ProjectCard/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home