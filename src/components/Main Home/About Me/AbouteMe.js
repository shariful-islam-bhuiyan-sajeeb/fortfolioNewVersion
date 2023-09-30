import React from "react";

const AbouteMe = () => {
  return (
    <div className="md:w-11/12 w-full mx-auto my-20 py-8">
      <div className="flex items-center justify-center gap-x-4 ">
        <div className="md:w-3/5 w-full text-left ">
          <h2 className="lg:text-4xl md:text-xl text-lg p-0 font-serif font-semibold  text-white ">
            About <span className="text-red-600">Me</span>
          </h2>
          <h2 className="lg:text-2xl md:text-xl text-lg py-3  font-serif font-semibold text-white">
            Everything you can imagine is real{" "}
          </h2>
          <div className="flex items-center w-full  lg:gap-x-4 md:gap-x-3 gap-x-2 md:text-md text-sm  font-medium  text-white">
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              alias deleniti excepturi sed ea praesentium assumenda hic autem
              minima aliquid!
            </h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
              ipsum. Temporibus nemo assumenda ipsam eos optio voluptatum.
              Omnis, corrupti ea!
            </h2>
          </div>
        </div>
        <div className="md:w-2/5 w-full  ">
          <h2 className="lg:text-4xl md:text-3xl text-xl font-serif font-semibold text-red-600">
            Culture
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            suscipit corporis adipisci illum excepturi tenetur repellat veniam
            culpa vel soluta provident, voluptatibus id eum dolor nemo. Quasi
            obcaecati quis in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbouteMe;
