import React from 'react'
import txw from '../../public/assets/The-Xiting-Way-Logo.jpg'
import osc from '../../public/assets/OSC.jpeg'
import swoc from '../../public//assets/swoc.jpg'
import acm from '../../public/assets/Chitkara-ACM.png'

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
<div className="xl:w-1/4 md:w-1/2 p-4 ">
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
      <section className="text-gray-400 body-font bg-gray-900 px-6" id='experience'>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full">
          </div>
          <div className="lg:text-center" >
        <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase" data-aos="flip-right">
          My Experience
        </h2>
        <p className="mt-2 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl" data-aos="fade-in">
          {"{"} Experience {"}"}
        </p>
      </div>
 
          <div className="flex mt-12 flex-wrap -m-4" data-aos="fade-in">

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