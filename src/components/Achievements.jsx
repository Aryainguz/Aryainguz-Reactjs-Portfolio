import React from 'react'
import bestweb3hack from '../../public/assets/bestweb3hack.jpg'
import osclead from '../../public/assets/osclead.jpg'
import acmwinners from '../../public/assets/acmwinners.jpg'
import ceedfinalist from '../../public/assets/ceedfinalist.jpg'
import buildspace from '../../public/assets/buildspace.jpg'
import sih from '../../public/assets/sih.jpg'
import coffeandcode from '../../public/assets/coffeandcode.jpg'
import hacktoberfest from '../../public/assets/hacktoberfest.jpg'
import swocadmin from '../../public/assets/swocadmin.png'

const projectsArray = [
  {
    img:bestweb3hack,
    title: 'Winners - Hack4Sustainability, Thapar University',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 0,
    link: ''
  },
  {
    img:osclead,
    title: 'Open Source Lead at Open Source Chandigarh',
    description: `A website for The Xiting Way for services website. Built using Nodejs, Expressjs, AOS Animations. With top SEO ranking.`,
    id: 1,
    link: 'https://txwservices.software/'  
  },
  {
    img:acmwinners,
    title: 'Winners - ACM Present Your Ideas',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 2,
    link: ''
  },
  {
    img:ceedfinalist,
    title: 'Ceed Innovest 2.0 Finalist The Xiting Way',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 3,
    link: ''
  },
  {
    img:buildspace,
    title: 'buildspace Nights and Weekends S4 - Graduate',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 4,
    link: ''
  },
  {
    img:sih,
    title: 'SIH 2023 Top 30 From Chitkara University',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 5,
    link: ''
  },
  {
    img:coffeandcode,
    title: 'Special Mention - Coffe and Code Hack 2023, UIET',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 6,
    link: ''
  },
  {
    img:hacktoberfest,
    title: 'Hacktoberfest 2023 - Contributor & Maintainer',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 7,
    link: ''
  },
  {
    img:swocadmin,
    title: 'Project Admin - SWOC 2024 (EuphoriaCheck Top 3)',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    id: 8,
    link: ''
  }
]


const LeftProjectCard = ({img,title,description,id,link}) => {
  return (
    <section className="bg-gray-900 p-4">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img className="w-full shadow-lg shadow-black rounded-lg block" src={img} alt="dashboard image" data-aos="zoom-in-right" />
      <div className="mt-4 md:mt-0" data-aos="zoom-in-left">
        <h2 className="mb-4 text-white font-extrabold text-3xl sm:text-3xl tracking-tight ">{title} </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
         {description}
        </p>
        <a href={link} className="inline-flex items-center text-white bg-indigo-600 hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          Know More
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

        </a>
      </div>
    </div>
  </section>
  )
}

const RightProjectCard = ({img,title,description,id,link}) => {
  return (
    <section className="bg-gray-900 p-4">
        
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <img className="w-full block shadow-lg shadow-black rounded-lg sm:hidden" src={img} alt="dashboard image" data-aos="zoom-in-left" />

      <div className="mt-4 md:mt-0" data-aos="zoom-in-right">
        <h2 className="mb-4 text-white font-extrabold text-3xl sm:text-3xl tracking-tight ">{title} </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
         {description}
        </p>
        <a href={link} className="inline-flex items-center text-white bg-indigo-600 hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          Know More
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

        </a>
      </div>
      <img className="w-full hidden shadow-lg shadow-black rounded-lg sm:block" src={img} alt="dashboard image"  data-aos="zoom-in-left" />

    </div>
  </section>
  )
}

const Projects = () => {
  return (
    <>
      <section className="bg-gray-900 text-white w-full py-20" id='achievements'>
        <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase" data-aos="flip-right">
              My Achievements
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl" data-aos="flip-in">
              {"{"} Achievements {"}"}
            </p>
          </div>
        </div>

        <LeftProjectCard img={projectsArray[0].img} title={projectsArray[0].title} description={projectsArray[0].description} link={projectsArray[0].link} />
        <RightProjectCard img={projectsArray[1].img} title={projectsArray[1].title} description={projectsArray[1].description} link={projectsArray[1].link} />
        <LeftProjectCard img={projectsArray[2].img} title={projectsArray[2].title} description={projectsArray[2].description} link={projectsArray[2].link} />
        <RightProjectCard img={projectsArray[3].img} title={projectsArray[3].title} description={projectsArray[3].description} link={projectsArray[3].link} />
        <LeftProjectCard img={projectsArray[4].img} title={projectsArray[4].title} description={projectsArray[4].description} link={projectsArray[4].link} />
        <RightProjectCard img={projectsArray[5].img} title={projectsArray[5].title} description={projectsArray[5].description} link={projectsArray[5].link} />
        <LeftProjectCard img={projectsArray[6].img} title={projectsArray[6].title} description={projectsArray[6].description} link={projectsArray[6].link} />
        <RightProjectCard img={projectsArray[7].img} title={projectsArray[7].title} description={projectsArray[7].description} link={projectsArray[7].link} />
        <LeftProjectCard img={projectsArray[8].img} title={projectsArray[8].title} description={projectsArray[8].description} link={projectsArray[8].link} />
      </section>

    </>
  )
}

export default Projects