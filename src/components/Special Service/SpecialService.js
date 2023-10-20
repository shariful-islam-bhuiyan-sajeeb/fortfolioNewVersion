import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Card from "./Card";
import Aos from "aos";
const SpecialService = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center font-medium font-sans ">
        <p className="md:text-lg text-sm  text-white">Specialized In</p>
        <h2 className="lg:text-4xl md:text-2xl text-xl font-serif text-red-600 ">
          Services
        </h2>
        <div className="flex items-center justify-center gap-x-2 ">
          <div className="text-center ">
            <p className="w-[50px] h-[1px] bg-gray-300"></p>
            <p className="w-[50px] h-[1px] bg-gray-300"></p>
          </div>
          <div>
            <FaCode className="md:text-2xl text-lg text-white " />
          </div>
          <div className="text-center ">
            <p className="w-[50px] h-[1px] bg-gray-300"></p>
            <p className="w-[50px] h-[1px] bg-gray-300"></p>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default SpecialService;
