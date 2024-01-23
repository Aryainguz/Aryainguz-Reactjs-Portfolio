import React from 'react' 
import {SiYoutube,SiGithub,SiInstagram,SiLinkedin}  from 'react-icons/si'


const socials = [
  {
    name: 'Github',
    href: 'https://github.com/Aryainguz',
    icon : <SiGithub className='h-6 w-6' />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aryaninguz.tsx/',
    icon : <SiInstagram className='h-6 w-6' />
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/aryan-inguz-7b7b9a1b0/',
    icon : <SiLinkedin className='h-6 w-6' />
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@AryanInguz',
    icon : <SiYoutube className='h-6 w-6' />
  }
]

const Footer = () => {
  return (
    <>
<footer className="text-gray-400 bg-gray-900 body-font border-t border-indigo-500">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span className="ml-3 text-xl">Aryan Inguz</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024  —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Aryainguz</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      {socials.map((social,i)=> (
      <a className="text-gray-400 mx-3" key={i} href={social.href} target='_blank'>
        {social.icon}
      </a>
      ))}
    </span>
  </div>
</footer>

    </>
  )
}

export default Footer