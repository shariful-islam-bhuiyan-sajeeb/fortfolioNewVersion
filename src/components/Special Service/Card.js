import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiCodeBracket, HiOutlineShieldCheck, IconName } from "react-icons/hi2";
import { FaHeadset, FaShareSquare, FaWordpressSimple } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-10/12 mx-auto lg:mt-10 md:mt-8 mt-6 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 sm:gap-4 gap-3">
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <FiSettings className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-xl text-lg font-abc font-semibold  text-white ">
            Web Design
          </h2>
          <li className="lg:text-md text-sm font-abc text-red-400">
            Responsive Web Design
          </li>
          <li className="lg:text-md text-sm font-abc text-red-400">
            React Web App Development
          </li>
          <li className="lg:text-md text-sm font-abc text-red-400">
            MERN Stack Web App Development
          </li>
        </div>
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <HiCodeBracket className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-xl text-lg font-abc font-semibold  text-white ">
            Web Development
          </h2>
          <li className=" text-sm font-abc text-red-400 ">
            Clear and Effective CTAs
          </li>
          <li className=" text-sm font-abc text-red-400 ">
            Optimized for Search Engines
          </li>
          <li className=" text-sm font-abc text-red-400 ">
            Single Page Application (SPA)
          </li>
        </div>
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <HiOutlineShieldCheck className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-xl text-lg font-abc font-semibold  text-white ">
            Web Application
          </h2>
          <li className="text-sm font-abc text-red-400 ">
            Reporting & Analytics
          </li>
          <li className="text-sm font-abc text-red-400 ">
            User Rights Management
          </li>
          <li className="text-sm font-abc text-red-400 ">
            Document Management System
          </li>
        </div>
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <FaHeadset className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-xl text-lg font-abc font-semibold  text-white  ">
            Programming Support
          </h2>
          <li className="text-sm font-abc text-red-400 ">Problem Solving</li>
          <li className="text-sm font-abc text-red-400 ">
            Development Environment Setup
          </li>
          <li className="text-sm font-abc text-red-400 ">Project Planning</li>
        </div>
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <FaShareSquare className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-lg sm:text-sm text-xs font-abc font-semibold  text-white">
            Teaching Web Development
          </h2>
          <li className="text-sm font-abc text-red-400 ">
            Front-End Development
          </li>
          <li className="text-sm font-abc text-red-400 ">
            Backend-End Development
          </li>
          <li className="text-sm font-abc text-red-400 ">
            FullStack Development
          </li>
        </div>
        <div className="lg:w-72 w-full lg:h-64 h-full md:space-y-2 space-y-1 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-800 hover:shadow-lg hover:shadow-gray-500  translate hover:-translate-y-2 transition-transform duration-700">
          <FaWordpressSimple className="lg:text-6xl md:text-2xl text-xl text-red-600 " />
          <h2 className="uppercase  md:text-xl text-lg font-abc font-semibold  text-white ">
            Wordpress Fixes <br /> & tweaks
          </h2>
          <p className="lg:text-md text-sm font-abc text-red-400 ">
            From Repair to Performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
