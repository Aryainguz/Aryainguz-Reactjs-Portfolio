import React from 'react'

const Navbar = () => {
  const toggleMobileMenu = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  };
  return (
    <>
  <nav className="bg-gray-900 shadow-lg">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {toggleMobileMenu()}}
        >
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        style={{ fontSize: "x-large" }}
      >
        <a href="" style={{ textDecoration: "none" }}>
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
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Experience
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
            >
              <button
                className="bg-gray-900 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                  alt=""
                />
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
        href="#"
        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Projects
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Experience
      </a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar