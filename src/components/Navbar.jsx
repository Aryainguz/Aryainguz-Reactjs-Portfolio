import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  const toggleMobileMenu = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  };
  return (
    <>
  <nav className="bg-gray-900 shadow-lg shadow-indigo-600/40 z-30" style={{width:"100vw",position:"fixed"}}>
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          className="inline-flex text-xl items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => toggleMobileMenu()}
        >
         <RxHamburgerMenu/>
        </button>
      </div>
      <div
        className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        style={{ fontSize: "x-large" }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              fontWeight: "bolder",
              color: "#0366d6"
            }}
          >
            Aryan
          </span>{" "}
          <span
            style={{
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              fontWeight: "bolder",
              color: "purple"
            }}
          >
            {" "}
            Inguz
          </span>
        </a>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex justify-end space-x-6 " style={{marginLeft:"209px"}}>
            <a
              href="#about"
              className=" text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <div className="ml-3 relative">
          <div>
            <a
              href="https://github.com/Aryainguz"
              style={{ textDecoration: "none" }}
              target="_blank"
              className='text-white px-3 py-2 rounded-md'
            >
              <button
                className="bg-gray-900 flex text-2xl rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <FaGithub/>
              </button>
            </a>
          </div>
          <a
            href="https://github.com/Aryainguz"
            style={{ textDecoration: "none" }}
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a
        href="#about"
        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Projects
      </a>
      <a
        href="#experience"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Experience
      </a>
      <a
        href="#achievements"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Achievements
      </a>
      <a
        href="#contact"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Contact
      </a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar