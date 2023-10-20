import React, { useEffect } from "react";
import "./Timeline.css";
import Aos from "aos";

const Timeline = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="md:mt-16 sm:mt-8 mt-6">
      <div className="flex md:flex-row flex-col items-center md:justify-around justify-center md:space-y-0 sm:space-y-2 space-y-1 font-medium  text-gray-400 hover:text-white">
        <h2 className="lg:text-lg  md:text-md sm:text-2xl text-xl  ">
          Education
        </h2>
        <h2 className="lg:text-lg  md:text-md sm:text-2xl text-xl ">
          Extra skills
        </h2>
      </div>
      <section className="timeline-section mt-6 px-4">
        <div className="timeline-items">
          {/*=========== University section is here  */}

          <div data-aos="fade-right" className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019/20</div>
            <div className="timeline-content text-left space-y-1 group">
              <h3 className=" group-hover:text-white text-gray-500 duration-300 text-lg">
                Bachelor of Social Science{" "}
              </h3>
              <div className="flex items-center group-hover:text-white text-gray-500 duration-300 md:gap-x-2 gap-x-1 text-left w-full">
                <h4>Department of Economics,</h4>
                <h5 className="text-md">Tejgaon College ,Dhaka</h5>
              </div>
              <p className=" text-justify">
                The training provided by universities in order to prepare people
                to work in various sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          {/*================= Programming hero card section  */}
          <div data-aos="fade-left" className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content text-left space-y-1 group">
              <h3 className="group-hover:text-white text-gray-500 duration-300 md:text-lg">
                Complete Web Development
              </h3>
              <h4 className="group-hover:text-white text-gray-500 duration-300">
                Programming Hero (2022 - 2022)
              </h4>
              <p className="">
                Programming Hero is a popular online learning platform and
                community for programmers based in Bangladesh.
              </p>
            </div>
          </div>
          {/* ====================== hsc section  */}
          <div data-aos="fade-right" className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019</div>
            <div className="timeline-content text-left space-y-1 group">
              <div className="flex items-center justify-between w-full ">
                <h3 className="group-hover:text-white text-gray-500 duration-300 text-lg">
                  Higher Secondary School Certificate
                </h3>
                <h5 className="text-sm bg-gray-700 px-2 py-1 rounded-lg font-mono text-gray-400">
                  3.50/5
                </h5>
              </div>
              <h2 className="text-gray-400 font-mono">
                Nabinagar Govt College (2017/2018)
              </h2>
              <p className="text-justify">
                Higher education is tertiary education leading to award of an
                academic degree. Higher education, also called post-secondary
                education..
              </p>
            </div>
          </div>
          {/* ============== Office Application section is here  */}
          <div data-aos="fade-left" className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017</div>
            <div className="timeline-content group spacey-y-1">
              <h3 className="group-hover:text-white text-gray-500 duration-300 md:text-lg">
                Complete Office Application - 2017{" "}
              </h3>
              <p>
                The skills acquired through this short course will not only make
                you more efficient in handling various tasks but also boost your
                overall productivity and professional credibility. By mastering
                Microsoft Word, Excel, PowerPoint, and Outlook, you will be
                equipped with the essential tools to excel in academia, work
                environments, and personal projects.
              </p>
            </div>
          </div>
          {/* secondary school certificate  */}
          <div data-aos="fade-right" className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017</div>
            <div className="timeline-content  text-left space-y-1  group">
              <div className="flex items-center justify-between w-full ">
                <h3 className="group-hover:text-white text-gray-500 duration-300 md:text-lg">
                  Secondary School Certificate
                </h3>
                <h5 className="text-sm bg-gray-700 px-2 py-1 rounded-lg font-mono text-gray-400">
                  4.10/5
                </h5>
              </div>
              <h2 className="group-hover:text-white text-gray-500 duration-300">
                Shibpur Hight School 2015-2017
              </h2>
              <p>
                Secondary education or post-primary education covers two phases
                on the International Standard Classification of Education scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
