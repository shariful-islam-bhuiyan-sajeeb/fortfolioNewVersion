import React from "react";
import { FaCode } from "react-icons/fa";

const Project = () => {
  return (
    <div className="xl:my-10">
      <div className="text-center">
        <h2 className="text-lg font-abc font-semibold text-white">Portfolio</h2>
        <h2 className="lg:text-2xl text-lg font-abc font-semibold text-red-600 uppercase">
          My Work
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <div className="xl:w-[70px] lg:w-[60px] md:w-[50px] w-[40px] h-[2px] font-bold bg-white"></div>
          <FaCode className="text-2xl" />
          <div className="xl:w-[70px] lg:w-[60px] md:w-[50px] w-[40px] h-[2px] font-bold bg-white"></div>
        </div>
      </div>
      <div className=" flex items-center md:my-6 my-4 font-abc lg:gap-x-6 md:gap-x-4 gap-x-3 ">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white translate rounded-lg group border border-green-500 "
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30   "></span>
          <span class="relative">All</span>
        </a>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center lg:px-10 px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white translate rounded-lg group border border-green-500"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
          <span class="relative">FullStack</span>
        </a>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center lg:px-10 px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white translate rounded-lg group border border-green-500"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
          <span class="relative">Frontend</span>
        </a>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center lg:px-10 px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white translate rounded-lg group border border-green-500"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
          <span class="relative">Design</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
