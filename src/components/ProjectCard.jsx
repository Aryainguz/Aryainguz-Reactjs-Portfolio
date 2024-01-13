import React from "react";

const ProjectCard = () => {
  return (
    <>
      <section className="text-white dark:bg-gray-900 p-4">
        <div className="max-w-7xl mx-6 px-4 sm:px-6 sm:mx-auto lg:px-8">
          <div className="lg:text-center mt-6">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">
              My Projects
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              {"{"} Projects {"}"}
            </p>
          </div>
        </div>

        <div className="projects flex flex-col sm:flex-row gap-12 p-6 sm:p-12 mt-12">



          <div className="flex w-[300px] flex-col border shadow-sm rounded-xl bg-slate-900 border-gray-700 shadow-slate-700/[.7]">
            <img
              className="w-[300px] h-auto rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
              alt="Image Description"
            />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-white">Card title</h3>
              <p className="mt-1 text-gray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="flex py-3">
                <a href="">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                    alt=""
                  />
                </a>
                <a href="" className="mx-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>


        </div>

      </section>
    </>
  );
};

export default ProjectCard;
