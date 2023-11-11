import React from 'react'
import txw from '../assets/The-Xiting-Way-Logo.jpg'
import osc from '../assets/OSC.jpeg'
import swoc from '../assets/swoc.jpg'
import acm from '../assets/Chitkara-ACM.png'

const ExperienceArray = [
  {
    "name": "The Xiting Way",
    "role": "Chief Technology Officer",
    "img": txw,
    "description": "As a CTO of a software development compamy www.TheXitngWay.com. I was leading the projects development process. As a team we challenged the boundaries of possiblities."
  },
  {
    "name": "Chitkara ACM Student Chapter",
    "role": "Web Master",
    "img": acm,
    "description": "As the webmaster of Chitkara ACM Student Chapter, I developed our website, empowered students with knowledge about modern web applications through workshops."
  },
  {
    "name": "Open Source Chandigarh",
    "role": "Open Source Lead",
    "img": osc, 
    "description": "As Open Source Lead at Open Source Chandigarh, I oversaw open source projects and encouraged students to contribute to the open-source community."
  },
  {
    "name": "Social Winter of Code",
    "role": "Campus Leader",
    "img": swoc,
    "description": "As the Campus Leader of Social Winter of Code at Chitkara University, I awared students about open source space to contribute their technical skills for the greater good."
  },
]


const Card = (props) => {
  return(
<div className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
      <img
        className="h-40 rounded w-full object-cover object-center mb-6"
        src={props.img}
        alt="content"
      />
      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
        {props.name}
      </h3>
      <h2 className="text-lg text-white font-medium title-font mb-4">
        {props.role}
      </h2>
      <p className="leading-relaxed text-base">
        {props.description}
      </p>
    </div>
  </div>
  )
}

const Experience = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-gray-900 p-6">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                My Experience
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            </p>
          </div>
          <div className="flex flex-wrap -m-4">

            {
              ExperienceArray.map((item,index) => (
                <Card key={index} name={item.name} role={item.role} description={item.description} img={item.img}/>
              ))
            }

          </div>
        </div>
      </section>

    </>
  )
}



export default Experience