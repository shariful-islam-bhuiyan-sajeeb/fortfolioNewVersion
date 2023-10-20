import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";

const PersonalContact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-start items-center lg:justify-normal justify-center ">
        <div
          data-aos="fade-right"
          className="lg:w-2/5 md:w-2/5 sm:w-3/4 w-11/12 mx-auto"
        >
          <img
            className="lg:w-80 md:w-72 sm:w-52 w-full xl:ml-16 lg:ml-12 md:ml-10 m-0"
            src="https://i.ibb.co/N9RRHGt/s-1.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="md:w-3/5 w-11/12 mx-auto lg:px-0 px-4 sm:mt-0 mt-3"
        >
          <div className="flex gap-x-2 ">
            <p className="lg:text-xl">And I'm a </p>
            <span className="lg:text-2xl md:text-xl sm:text-lg text-md font-serif font-semibold text-orange-600">
              <Typewriter
                options={{
                  strings: ["React Developer", "MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="flex flex-col ">
            <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-serif font-semibold">
              I Can Design Anything You Want
            </h2>
            <p className="md:text-md text-sm lg:mt-6 sm:mt-4 mt-2 pr-4  font-semibold text-gray-400 text-justify ">
              I am a self-driven, ambitious, and enthusiastic front‑end
              developer. I have worked on several web development projects using
              HTML, CSS, JavaScript, React JS, and Node JS. I am very interested
              to work as a Frontend developer and I love to do it. The
              possibilities offered by the industry are endless and this
              motivates me to keep learning new methods and technologies every
              day. I would love to contribute to supporting the team’s
              objectives and outstanding performance.
            </p>
            <div className="md:text-md text-sm mt-4 font-semibold text-gray-400 ">
              <p>Name : Shariful Islam Bhuiyan Sajeeb</p>
              <p>Age : 24 yrs</p>
              <p>Number : +8801791514345</p>
              <p>Address : Dhaka, Bangladesh</p>
              <p>Email : sharifulislambhuiyan93@gmail.com</p>
              <p></p>
            </div>
            <div className="flex items-center xl:gap-x-4 lg:gap-x-3 gap-x-2 lg:mt-6 mt-4">
              <a
                href="#_"
                className="relative inline-flex items-center lg:px-8 px-6 lg:py-2 py-1 overflow-hidden lg:text-md text-sm font-medium text-gray-300 border border-red-500 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-red-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Hire Me</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center lg:px-8 px-6 lg:py-2 py-1 overflow-hidden lg:text-md text-sm font-medium text-gray-300 border border-red-500 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-red-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalContact;
