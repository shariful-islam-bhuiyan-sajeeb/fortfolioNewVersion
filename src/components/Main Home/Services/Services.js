import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="my-20">
      <div className="flex  flex-col  items-center justify-center font-serif font-semibold md:space-y-2 space-y-1 text-white ">
        <h2 className="2xl:text-6xl xl:text-4xl  text-2xl ">Services</h2>
        <p className="xl:text-2xl lg:text-xl text-lg">
          What I provide to my cline_
        </p>
      </div>
      {/* ------------------ card section is here   */}
      <div className="container">
        <ul id="cards">
          <li className="card  " id="card1">
            <div className="flex">
              <div className="md:w-9/12 w-full xl:py-16 lg:py-10 md:py-4 py-2 xl:pl-6 md:px-6 sm:px-4 px-2 rounded-l-xl  bg-[#52b2cf] ">
                <h2 className="lg:text-xl md:text-lg sm:text-md text-sm text-black  ">
                  PERSONALIZATION
                </h2>
                <div className=" lg:mt-4 mt-2 font-medium text-black text-left">
                  <h1 className="lg:text-2xl md:text-lg sm:text-md text-sm">
                    WHAT IS PERSONALIZATION ?
                  </h1>
                  <p className="md:mt-4 sm:mt-2 mt-1 lg:text-lg sm:text-md text-xs text-black xl:w-4/5 w-full">
                    Personalization is becoming increasingly important for
                    modern result-generating websites. The ability to
                    personalize search results,
                  </p>
                </div>
              </div>
              <div className="sm:w-3/12  w-full mx-auto hidden sm:block ">
                <img
                  className="w-full rounded-r-2xl "
                  src="https://i.ibb.co/w0q7PgL/animation-lkunoahk-small.gif"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="card  " id="card2">
            <div className="flex   ">
              <div className="md:w-9/12 w-full xl:py-16 lg:py-10 md:py-4 py-2 xl:pl-6 md:px-6 sm:px-4 px-2 rounded-l-xl  bg-[#e5a36f] ">
                <h2 className="lg:text-xl md:text-lg sm:text-md text-sm text-black  ">
                  REAL-TIME DATA PROCESSING
                </h2>
                <div className=" lg:mt-4 mt-2 font-medium text-black text-left">
                  <h1 className="lg:text-2xl md:text-lg text-md">
                    WHY REAL-TIME DATA PROCESSING NEED?
                  </h1>
                  <p className="md:mt-4 sm:mt-2 mt-1 lg:text-lg sm:text-md text-xs text-black xl:w-4/5 w-full">
                    The ability to process and generate results in real-time,
                    providing users with up-to-date information as soon as it
                    becomes available.
                  </p>
                </div>
              </div>
              <div className="sm:w-3/12 w-full mx-auto hidden sm:block ">
                <img
                  className="w-full rounded-r-2xl"
                  src="https://i.ibb.co/5FcfMv0/animation-lkxju6yx-small.gif"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="flex   ">
              <div className="md:w-9/12 w-full xl:py-16 lg:py-10 md:py-4 py-2 xl:pl-6 md:px-6 sm:px-4 px-2 rounded-l-xl  bg-[#9cadce] ">
                <h2 className="lg:text-xl md:text-lg sm:text-md text-sm text-black  ">
                  MULTI-DEVICE COMPATIBILITY
                </h2>
                <div className=" lg:mt-4 mt-2 font-medium text-black text-left">
                  <h1 className="lg:text-2xl md:text-lg text-md">
                    MULTI-DEVICE COMPATIBILITY ?
                  </h1>
                  <p className="md:mt-4 sm:mt-2 mt-1 lg:text-lg sm:text-md text-xs text-black xl:w-4/5 w-full">
                    The website should be optimized for various devices, such as
                    laptop's, tablets, and smartphones, to make it accessible
                    for at all times.
                  </p>
                </div>
              </div>
              <div className="sm:w-3/12 w-full mx-auto hidden sm:block ">
                <img
                  className="w-full rounded-r-2xl"
                  src="https://i.ibb.co/LZQvHrG/animation-lkxk4gf3-small.gif"
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
