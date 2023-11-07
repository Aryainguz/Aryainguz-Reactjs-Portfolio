import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'

function App() {

  return (
    <>
  <Navbar/>
  <Hero/>
  <About/>
  <Experience/>
     </>
  )
}

export default App
