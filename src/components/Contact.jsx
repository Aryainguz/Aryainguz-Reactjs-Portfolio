import React from 'react'

const Contact = () => {
  return (
<>
<section className="text-gray-400 bg-gray-900 body-font p-6 sm:p-12" id='contact'>
    <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
          <div className="my-12 lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase" data-aos="flip-right">
              Let's Connect
            </h2>
            <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl" data-aos="fade-in">
              {"{"} Connect {"}"}
            </p>
          </div>
          </div>
  <div className="container px-5 py-12 mx-auto flex flex-wrap items-center" data-aos="fade-in">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-white">Let's discuss collaboration and work</h1>
      <p className="leading-relaxed mt-4">I beleive in progrmming ideas into reality and I'll love to connect with someone with similar passion.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-white text-lg font-medium title-font mb-5">Connect Me</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs mt-3">Let's connect</p>
    </div>
  </div>
</section>

</>

  )
}

export default Contact