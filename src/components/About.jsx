import React from 'react'


const About = () => {
  return (
    <section className="bg-gray-900 text-white w-full py-20">
    <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">
          About Me
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          {"{"} About {"}"}
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: globe-alt */}
                <svg
                  className="h-6 w-6"
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
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.5 9.5l7 3.5m0 0l7-3.5M4.5 14.5l7 3.5m0 0l7-3.5"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Location
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} "Chandigarh" : "Pb" {"}"}
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: scale */}
                <svg
                  className="h-6 w-6"
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
                    d="M3 6c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 6c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 18c0 1.1.9 2 2 2h6a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 18c0 1.1.9 2 2 2h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Skills
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
              "MERN Stack" : <br /> ["Nodejs, "Expressjs", "MongoDB", "Reactjs" ], <br /> 
              "Django" : <br />  ["Postgres SQL", "MVT model"], <br /> 
              "Languages" : <br /> ["Javascript", "Python", "C++", "C"], <br />
              {"}"}
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: lightning-bolt */}
                <svg
                  className="h-6 w-6"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
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
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: mail */}
                <svg
                  className="h-6 w-6"
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
                    d="M3 6l9 6-9 6M21 6l-9 6 9 6"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-100">
                Email
              </dt>
              <dd className="mt-2 text-base text-gray-500">
              {"{"} <br />
              "email" : <a href="mailto:aryaninguz369@gmail.com" className='text-blue-400 hover:text-blue-500'> "aryaninguz369@gmail.com"</a> <br />
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
