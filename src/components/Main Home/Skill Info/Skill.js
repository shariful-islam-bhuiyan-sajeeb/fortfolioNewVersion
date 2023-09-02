import React from "react";

const Skill = () => {
  return (
    <div className="xl:mt-16 lg:mt-10 md:mt-8 mt-4">
      <div>
        <h1 className="text-center  xl:text-4xl lg:text-2xl text-xl font-serif font-semibold text-orange-700 ">
          Skill
        </h1>
        <h3 className="text-center lg:text-xl sm:text-lg text-md  font-serif font-medium text-orange-400 ">
          Skills are the expertise or talent needed in order to do a job or
          task.
        </h3>
      </div>
      {/* -------------------card section ----------- */}
      <div>
        <div className="group w-40 h-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 ">
              <h2 className="h-full w-full rounded-xl object-cover border border-white shadow-xl shadow-black/80 text-white text-3xl text-center  ">
                {" "}
                Font
              </h2>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              Back{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
