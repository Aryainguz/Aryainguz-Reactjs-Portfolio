import React from 'react';
import Marquee from "react-fast-marquee";
import { FaGithub, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiChakraui, SiCplusplus, SiDjango, SiDocker, SiExpress, SiFigma, SiGit, SiJavascript, SiKubernetes, SiMongodb, SiNextdotjs, SiPostgresql, SiPostman, SiPrisma, SiPython, SiRedis, SiRedux, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';


const skills = [
  {
    icon: <FaNodeJs/>,
  },

  {
    icon: <FaSass/>,
  },
  {
    icon: <FaGithub/>,
  },
  {
    icon: <FaReact/>,
  },
  {
    icon: <SiTailwindcss/>,
  },
  {
    icon: <SiNextdotjs/>,
  },
  {
    icon: <SiMongodb/>,
  },
  {
    icon: <SiTypescript/>,
  },
  {
    icon: <SiExpress/>,
  },
  {
    icon: <SiJavascript/>,
  },
  {
    icon: <SiChakraui/>,
  },
  {
    icon: <SiDjango/>,
  },
  {
    icon: <SiPython/>,
  },
  {
    icon: <SiCplusplus/>,
  },
  {
    icon: <SiFigma/>,
  },
  {
    icon: <SiPostgresql/>,
  },
  {
    icon: <SiPostman/>,
  },
  {
    icon: <SiGit/>,
  },
  {
    icon: <SiDocker/>,
  },
  {
    icon: <SiKubernetes/>,
  },
  {
    icon: <SiPrisma/>,
  },
  {
    icon: <SiRedis/>,
  },
  {
    icon: <SiSocketdotio/>,
  },
  {
    icon: <SiRedux/>,
  },
]

const Skills = () => {
  return (
    <>
    <section className="bg-gray-900">
    <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="text-white mb-4 lg:text-center">
        <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase"  data-aos="fade-in"
          data-aos-duration="3000">
          My Expertise
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"  data-aos="fade-in"
          data-aos-duration="3000">
          {"{"} Expertise {"}"}
        </p>
      </div>
      </div>
          <Marquee  data-aos="fade-up"
          data-aos-duration="3000">
            <div className="grid mb-6 grid-cols-12 gap-8 sm:gap-12 md:grid-cols-12 lg:grid-cols-12 text-gray-400">
              {skills.map((skill,i) => (
                <a href='' key={i} className="text-xl sm:text-3xl text-white flex justify-center items-center ml-4">
                  {skill.icon}
                </a>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  )
}

export default Skills