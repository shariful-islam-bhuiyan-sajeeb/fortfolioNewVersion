import React from "react";
import AboutTitle from "../About Title/AboutTitle";
import About from "../About/About";
import Services from "../Services/Services";
import PersonalContact from "../../Personal Information/PersonalContact";
import Skill from "../Skill Info/Skill";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <AboutTitle />
      <About />
      <Services />
      <PersonalContact />
      <Skill />
    </div>
  );
};

export default Home;