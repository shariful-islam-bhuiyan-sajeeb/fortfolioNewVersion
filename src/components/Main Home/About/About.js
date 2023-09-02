import React from "react";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10 sm:mt-8 mt-6 ">
      <div className="text-center font-serif font-semibold text-white md:space-y-2 space-y-1">
        <h1 className="xl:text-5xl lg:text-3xl md:text-xl text-lg ">
          About Me
        </h1>
        <p className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-md">
          Education & Learning_
        </p>
      </div>

      <Timeline />
    </div>
  );
};

export default About;
