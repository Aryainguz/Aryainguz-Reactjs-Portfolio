import React from 'react'
import img1 from '../assets/Aryan-Team1.jpeg'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
  AOS.init();

  return (
   <>
   <section className="bg-gray-900 text-white w-full py-20 flex flex-wrap-reverse">
  <div
    className="flex flex-wrap-reverse"
    style={{ width: "97vw", display: "flex", flexWrap: "wrap-reverse" }}
  > <br />
    <div className="w-full mx-auto mt-16 px-6 flex justify-center sm:px-6 sm:w-1/2 lg:px-8">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block xl:inline"  data-aos="fade-up"
     data-aos-duration="2500">Namaste!</span> 
          <span className="block text-indigo-400 xl:inline"  data-aos="fade-up"
     data-aos-duration="2500"> I'm Aryan</span>
        </h1>
        <p
          id="typewriter"
          className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
        Programming ideas into reality.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="mt-7 w-48 sm:mt-0 sm:ml-3 "> 
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto px-4  sm:px-6 lg:px-8">
      <img
        src={img1}
        style={{ height: 250, boxShadow: "30px 30px 5px #000" }}
        alt="Placeholder Image"
        className="object-cover object-center rounded-full shadow-md"
      />
    </div>
  </div>
</section>

   </>
  )
}

export default Home