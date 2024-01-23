import React from 'react'
import {FaLocationArrow,FaCode,FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const About = () => {
  return (
    <section className="bg-gray-900 text-white w-full py-20" id='about'>
    <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase" data-aos="flip-right"
          >
          About Me
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl" data-aos="fade-in"
          >
          {"{"} About {"}"}
        </p>
      </div> 
      <br />
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex" data-aos="zoom-in-right"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
               <FaLocationArrow className='h-6 w-6' />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Location
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
               "Country" : "India" <br />
               "Chandigarh" : "Pb" <br />
                {"}"}
              </dd>
            </div>
          </div>
          <div className="flex" data-aos="zoom-in-left"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <FaCode className='h-6 w-6' />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Skills
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
              "MERN Stack" : ["Nodejs, "Expressjs", "MongoDB", "Reactjs" ], <br /> 
              "Nextjs" :    ["SSR", "ISR", "App Router", "Prisma", "NextAuth" ], <br /> 
              "DevOps" :    ["Micro Services", "Docker", "Kubernetes" ], <br /> 
              "Django" :    ["Postgres SQL", "MVT model"], <br /> 
              "Languages" : ["Typescript","Javascript", "Python", "C++", "C"], <br />
              {"}"}
              </dd>
            </div>
          </div>
          <div className="flex" data-aos="zoom-in-right"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <FaGithub className='h-6 w-6' />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                GitHub
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
              "username" : "Aryainguz", <br />
              "this repo" : <a href="https://github.com/Aryainguz" className='text-blue-400 hover:text-blue-500'>"View on GitHub"</a><br />
              {"}"}
              </dd>
            </div>
          </div>
          <div className="flex" data-aos="zoom-in-left">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <SiGmail className='h-6 w-6' />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Email
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
              "email" : <a href="mailto:aryaninguz369@gmail.com" className='text-blue-400 hover:text-blue-500'> "aryaninguz369@gmail.com"</a> <br />
              "email" : <a href="mailto:team@thexitingway.com" className='text-blue-400 hover:text-blue-500'> "The Xiting Way"</a> <br />
              {"}"}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </section>
  
  );
};

export default About;
