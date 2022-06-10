import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({project}) => {
  const {
    id,
    name,
    picture,
    details
  } = project;
  const navigate = useNavigate()
  const navigateToDetails = id =>{
    navigate(`/projects/projectDetails/${id}`)
  }
  return (
    <section className="mt-10 mb-10">
        <div className="mb-10 mx-10 lg:mx-0 lg:mb-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="max-w-md w-full bg-slate-200 shadow-lg rounded-xl p-6">
            <div className="flex flex-col">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-100 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-black rounded-full w-9 h-9 text-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>

                  <img
                    src={picture}
                    alt=""
                    className=" w-full object-fill rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <h2 className="text-xl mr-auto cursor-pointer text-black font-semibold hover:text-primary my-2">
                     {name}
                    </h2>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <p className="mr-auto cursor-pointer text-black hover:text-primary text-sm ">
                       {details}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start">
                    <button
                      onClick={() => navigateToDetails(id)}
                      className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-primary px-5 py-3 hover:shadow-lg tracking-wider text-black rounded-full hover:border-2 hover:bg-#7a81a8 border-solid"
                    >
                      <span>See Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Projects;
