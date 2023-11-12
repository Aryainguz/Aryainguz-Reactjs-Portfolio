import React from 'react'
import euphoriacheck from '../assets/euphoriacheck.png'


const projectsArray = [
  {
    title: 'EuphoriaCheck',
    description: `A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.`,
    image: euphoriacheck,
    tags: ['NodeJS', 'ExpressJS', 'EJS', 'Vercel'],
    source: ''
  }
]

const ProjectCard = (props) => {
  return (
    <section className="bg-white dark:bg-gray-900 p-4">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img className="w-full   dark:hidden" src={euphoriacheck} alt="dashboard image" />
      <img className="w-full hidden dark:block" src={euphoriacheck} alt="dashboard image" />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 font-extrabold text-3xl sm:text-3xl tracking-tight ">EuphoriaCheck </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.
        </p>
        <a href="#" className="inline-flex items-center text-white bg-indigo-600 hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          View Project
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

const Projects = () => {
  return (
    <>
      <section className="bg-gray-900 text-white w-full py-20">
        <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">
              My Projects
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              {"{"} Projects {"}"}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects