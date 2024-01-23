import React from "react";
import {FaLocationArrow,FaGithub} from "react-icons/fa";
import devstore from '../../public/assets/devstore.png'
import admin from '../../public/assets/admin.png'
import devxclub from '../../public/assets/devxclub.png'
import devlance from '../../public/assets/devlance.png'
import euphoriacheck from '../../public/assets/euphoriacheck.png'
import ecommerce from '../../public/assets/ecommerce.png'
import todo_redux from '../../public/assets/todo_redux.png'
import ideaxapi from '../../public/assets/ideaxapi.png'


const ProjectsArray = [
  {
    title: "CodeStore",
    description: "A Full stack e commerce for selling and buying codes online built using Vite + ReactJS + ExpressJS + MongoDB Atlas + Nodejs fully in Typescript.",
    img: devstore,
    hlink:"",
    glink:"https://github.com/Aryainguz/DevStore-Frontend"
  },
  {
    title: "E Commerce Admin Dashboard",
    description: "A Fully Typescript Admin Dashboard for managing the E Commerce built using Vite + ReactJS + Charts + Graphs + Sorting + Pagination + TailwindCSS.",
    img: admin,
    hlink:"",
    glink:"https://github.com/Aryainguz/DevStore-AdminDashboard-Frontend"
  },
  {
    title: "DevXClub ",
    description: "A developers community platform with event bookings, Google/Email auth built using ReactJS",
    img: devxclub,
    hlink:"https://devxclub.web.app/",
    glink:"https://github.com/Aryainguz/NightClub"
  },
  {
    title: "DevLance",
    description: "A Full stack open source developer's only freelancing platform built using Vite + ReactJS + ExpressJS + MongoDB Atlas + Nodejs fully in Typescript.",
    img: devlance,
    hlink:"https://devlance.onrender.com/",
    glink:"https://github.com/Aryainguz/DevLance-V2"
  },
  {
    title: "Euphoria Check",
    description: "A Web Application to check the euphoria level of a person using the PERMA model of happiness developed by psychologist Martin Seligman. Built using NodeJS, ExpressJS, EJS, and deployed on Vercel.",
    img: euphoriacheck,
    hlink:"https://euphoria-check-perma-meter-express.vercel.app/",
    glink:"https://github.com/Aryainguz/Euphoria-Check-PERMA-Meter-Express"
  },
  {
    title: "The Xiting Way Website",
    description: "Software Startup's Landing Page Built using Nextjs 14 + TailwindCSS + Shadcn UI + Fully Typescript with SEO and speed optimization.",
    img: ideaxapi,
    hlink:"https://www.thexitingway.com/",
    glink:"https://github.com/Aryainguz/TheXitingWay-Website"
  },
  {
    title: "IdeaXAPI",
    description: "A REST API for generating Ideas based by choosing any famous personality built using NodeJS + ExpressJS + Open AI integration.",
    img: ecommerce,
    hlink:"https://idea-x-api.vercel.app/",
    glink:"https://github.com/Aryainguz/IdeaXApi"
  },
  {
    title: "E Commerce Cart",
    description: "An E Commerce Cart built using ReactJS + Context API + TailwindCSS.",
    img: todo_redux,
    hlink:"https://loquacious-basbousa-23537c.netlify.app/",
    glink:"https://github.com/Aryainguz/EcommerceCart-React-ConextAPI"
  },
]

const Projects = () => {
  return (
    <>
      <section className="text-white dark:bg-gray-900 p-4" id="projects">
        <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
          <div className="lg:text-center mt-6">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase" data-aos="flip-right">
              My Projects
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl" data-aos="fade-in">
              {"{"} Projects {"}"}
            </p>
          </div>
        </div>

        <div className="projects flex flex-wrap flex-col sm:flex-row gap-12 p-6 sm:p-12 mt-12">
        
         {
            ProjectsArray.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} img={project.img} hlink={project.hlink} glink={project.glink} />
            ))
         }
        </div>

      </section>
    </>
  );
};

const ProjectCard = ({ title, description, img, hlink,glink }) => {
  return (
    <>
      <div className="flex w-[300px] flex-col border shadow-sm rounded-xl bg-slate-900 border-gray-700 shadow-slate-700/[.7]" data-aos="fade-in">
            <img
              className="w-[300px] h-auto rounded-t-xl"
              src={img}
              alt="Image Description"
            />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-1 text-gray-400">
               {description}
              </p>
              <div className="flex py-3">
                <a href={hlink} target="_blank">
                <FaLocationArrow className='h-6 w-6' />
                </a>
                <a href={glink} className="mx-3" target="_blank">
                <FaGithub className='h-6 w-6' />
                </a>
              </div>
            </div>
          </div>

    </>
  )
}

export default Projects;
