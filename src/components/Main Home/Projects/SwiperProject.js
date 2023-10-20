import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperProject.css";

// npm i swiper

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperProject() {
  return (
    <div className="relative hidden lg:block">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className=" ">
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/grm6Wkw/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">
                  Jessica Brown
                </h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/tpDXcbN/man-mid-s-poses-studio-portrait-his-semi-white-background-67858855.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">
                  Caleb Hoffman
                </h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/grm6Wkw/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">alex lila</h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
