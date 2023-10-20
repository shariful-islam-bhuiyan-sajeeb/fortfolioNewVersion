import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {
  FaBars,
  FaDatabase,
  FaHouseUser,
  FaPencilAlt,
  FaSpeakap,
  FaTimes,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " relative overEffect flex items-center gap-x-2 text-gray-300   transition-all duration-300     "
            : "bg-transparent"
        }
      >
        <FaHouseUser />
        Home
      </NavLink>

      <Link className=" relative overEffect flex items-center gap-x-2">
        {" "}
        <FaSpeakap /> Skill
      </Link>
      <Link className="relative overEffect flex items-center gap-x-2">
        <FaUser /> About
      </Link>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? " relative overEffect flex items-center gap-x-2 text-gray-300 border-b-2 border-red-800 transition-all duration-300   "
            : "relative overEffect flex items-center gap-x-2 bg-transparent"
        }
      >
        <FaDatabase />
        Project
      </NavLink>
      <NavLink className="relative overEffect flex items-center gap-x-2">
        {" "}
        <FaUserEdit /> Contact{" "}
      </NavLink>
      <Link className="relative overEffect flex items-center gap-x-2">
        <FaPencilAlt /> Blog
      </Link>
      <div>
        <a
          href="#_"
          className="relative inline-flex items-center justify-start 2xl:px-4 xl:px-2 xl:py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Resume
          </span>
        </a>
      </div>
    </>
  );
  return (
    <div className="w-full mx-auto md:py-6 py-4 ">
      <div className="flex items-center justify-between xl:w-9/12 lg:w-full md:w-full w-11/12 mx-auto lg:px-2 md:px-4 xl:px-0">
        <div className="">
          <Link className="flex items-center justify-center">
            <img
              className="xl:w-30 lg:w-32 sm:w-36 w-28 "
              src="https://i.ibb.co/WvRJ2DY/ssssssssssssssssssssssssssssssssss-removebg-preview.png"
              alt=""
            />
            <h2 className="lg:text-2xl md:text-xl sm:text-lg font-serif font-semibold text-white ">
              harif
            </h2>
          </Link>
        </div>

        <div className="flex item-center justify-end relative  w-full xl:text-3xl md:text-lg text-md font-serif">
          <ul className="  menu menu-horizontal hidden lg:flex xl:px-3 md:px-2 py-1 lg:text-lg lg:text-md text-sm font-semibold    2xl:gap-x-10 xl:gap-x-8 lg:gap-x-6 md:gap-x-4 font-serif text-white ">
            {menuItems}
          </ul>

          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <FaBars className="text-3xl text-white " />
            ) : (
              <FaTimes className="text-4xl text-gray-300 " />
            )}
          </div>
          <div
            className={`  ${
              open
                ? " absolute sm:top-14 top-11 left-0 right-4 flex items-center justify-center    w-full  mx-auto text-center lg:py-6 md:py-4 py-2 sm:text-lg text-md font-semibold bg-white text-black lg:hidden  transition-all duration-700 ease-in-out scroll-smooth"
                : "absolute -top-[1000px]   w-full text-center  bg-white text-black lg:hidden   duration-700 ease-in-out "
            }`}
          >
            <ul className=" flex flex-col items-center md:text-2xl sm:text-xl text-lg  md:space-y-6 sm:space-y-4 space-y-3 py-4 lg:hidden  w-full text-black font-serif">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
