import React from "react";
import Typewriter from "typewriter-effect";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const AboutTitle = () => {
  return (
    <div className="md:px-0 px-4 flex lg:flex-row flex-col  items-center mt-10">
      <div className="lg:hidden ">
        <img
          className="flex justify-center lg:w-96 w-full mx-auto rounded-lg text-top"
          src="https://i.ibb.co/Mgzp2RV/without-bg.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start mx-auto lg:mt-0 mt-6 text-white font-serif md:space-y-2 space-y-1 md:w-2/3 w-full ">
        <h2 className="lg:text-2xl sm:text-xl text-lg  font-medium ">
          Hello, I'm{" "}
        </h2>
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md font-medium">
          Md. Shariful Islam Bhuiyan Sajeeb
        </h1>
        <div className="flex items-end gap-x-2">
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
        <p className="lg:text-lg md:text-md text-sm text-gray-300">
          Junior Frontend Developer with a passion for Web Applications
          Development. Passionate about learning new technologies. Seeking
          opportunities and challenges that will improve my skill set.
        </p>
        <div className="xl:pt-6 md:pt-4 pt-2 flex items-center lg:justify-start justify-center w-full gap-x-4 ">
          <a
            href="#_"
            className="relative lg:px-8 md:px-6 px-4 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span className="relative uppercase lg:text-md text-sm ">
              Say Hello
            </span>
          </a>
          <div className="flex items-center   gap-x-3 xl:text-2xl lg:text-lg text-md text-gray-300">
            <BsFacebook />
            <BsLinkedin />
            <SiGithub />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          className="lg:w-96 w-full rounded-lg text-top"
          src="https://i.ibb.co/Mgzp2RV/without-bg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutTitle;
