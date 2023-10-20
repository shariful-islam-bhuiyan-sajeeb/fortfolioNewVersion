import React from "react";
import { FaCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="xl:my-10">
      <div>
        <div className="text-center">
          <h2 className="lg:text-2xl text-lg font-abc font-semibold text-white">
            Portfolio
          </h2>
          <h2 className="lg:text-2xl text-lg md:my-3 my-1 font-abc font-medium text-red-600 uppercase">
            MY LATEST WORK
          </h2>
          <p className="w-1/4 mx-auto md:text-md text-sm py-2 font-abc font-medium text-white">
            Here are the projects that i have finished working on these are my
            best projects so far you can see the details when you hover over the
            image.
          </p>
          <div className="flex items-center justify-center gap-x-3">
            <div className="xl:w-[70px] lg:w-[60px] md:w-[50px] w-[40px] h-[2px] font-bold bg-white"></div>
            <FaCode className="text-2xl" />
            <div className="xl:w-[70px] lg:w-[60px] md:w-[50px] w-[40px] h-[2px] font-bold bg-white"></div>
          </div>
        </div>
        <div className="lg:my-10 md:my-8 my-6  xl:px-0 lg:px-2 md:px-4 px-6">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
