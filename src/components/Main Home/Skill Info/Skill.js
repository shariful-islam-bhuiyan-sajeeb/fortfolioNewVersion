import React from "react";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div className="xl:mt-16 lg:mt-10 md:mt-8 mt-4">
      <div className="md:space-y-2 space-y-1">
        <h1 className="text-center  xl:text-4xl lg:text-2xl text-xl font-serif font-semibold text-orange-700 ">
          Skill
        </h1>
        <h3 className="text-center lg:text-xl sm:text-lg text-md sm:px-0 px-4  font-serif font-medium text-gray-300 ">
          Skills are the expertise or talent needed in order to do a job or
          task.
        </h3>
      </div>
      {/* -------------------Skill card section ----------- */}
      <div className="xl:mt-10 lg:mt-8 sm:mt-6 mt-4 lg:w-4/6 md:w-10/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center   ">
          {/* html card -One */}
          <div className="group w-32 h-32 mx-auto cursor-pointer  ">
            <div className="relative h-full w-full text-center rounded-xl  transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <IoLogoHtml5 className=" md:text-5xl sm:text-3xl text-2xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="xl:text-2xl lg:text-xl md:text-lg  text-md  font-medium text-orange-600">
                  {" "}
                  HTML 5
                </h2>
              </div>
            </div>
          </div>
          {/* CSS3 card section -two */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <IoLogoCss3 className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md font-medium text-orange-600">
                  {" "}
                  CSS 3
                </h2>
              </div>
            </div>
          </div>
          {/* JavaScript card section -three */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiJavascript className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md font-serif font-medium text-orange-600">
                  {" "}
                  Java Script
                </h2>
              </div>
            </div>
          </div>
          {/* Tailwind card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiTailwindcss className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-md  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  TailwindCSS
                </h2>
              </div>
            </div>
          </div>
          {/* Bootstrap card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <FaBootstrap className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-md  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  Bootstrap
                </h2>
              </div>
            </div>
          </div>
          {/* React card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <FaReact className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  React
                </h2>
              </div>
            </div>
          </div>
          {/* Next card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <TbBrandNextjs className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  Next Js
                </h2>
              </div>
            </div>
          </div>
          {/* Firebase card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiFirebase className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  Firebase
                </h2>
              </div>
            </div>
          </div>
          {/* Node js card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <FaNode className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  Node js
                </h2>
              </div>
            </div>
          </div>
          {/* Express js card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiExpress className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  Node js
                </h2>
              </div>
            </div>
          </div>
          {/* json web token  card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiJsonwebtokens className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-md text-sm   font-serif font-medium text-orange-600">
                  {" "}
                  Json web token
                </h2>
              </div>
            </div>
          </div>
          {/* Mongodb card section -four */}
          <div className="group w-32 h-32 mx-auto cursor-pointer ">
            <div className="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0  ">
                <div className="flex items-center justify-center h-full w-full rounded-xl object-cover  shadow-black/80   ">
                  <SiMongodb className=" md:text-5xl sm:text-3xl text-xl text-center text-orange-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center h-full w-full rounded-xl bg-black  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <h2 className="lg:text-lg  md:text-lg sm:text-md  font-serif font-medium text-orange-600">
                  {" "}
                  MongoDB
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
