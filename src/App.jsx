import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

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

export default App
