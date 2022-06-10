import React from "react";
import UseProject from "../../Hooks/UseProject";
import Projects from "./Projects";

const ProjectHomePage = () => {
    const [projects] = UseProject();
  return (
    <div>
      <h1 className="text-center text-4xl font-sans font-bold text-red-700 pt-10 pb-10">
        Projects
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10">
      {
                projects.slice(0, 3).map((project, index) =>(
                    <Projects key={index} project = {project}/>
                ))
            }
      </div>
      <div className="flex justify-center mb-10">
      <a href="https://github.com/rafidmahin20">
      <button type="button" class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">See more in github</button>
      </a>
      </div>
    </div>
  );
};

export default ProjectHomePage;
