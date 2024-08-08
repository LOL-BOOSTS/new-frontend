import { useState } from "react";

const Service = () => {
  return (
    <div className="relative mt-10 lg:mt-20">
      <video
        className="w-full h-[200px] lg:h-[300px] object-cover object-center opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/images/game_player/1.webm" />
      </video>
      <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center gap-2 lg:gap-4">
        <h1 className="mx-auto text-3xl max-w-[75%] lg:text-5xl lg:max-w-[75%] text-center">
          So…what are you waiting for? Launch yourself to your dream rank today!
        </h1>
        <button className="px-12 py-2 rounded-3xl border border-indigo-500 text-indigo-200 hover:bg-indigo-800 hover:text-white transition-all duration-100 mt-4">
          Check out our services
        </button>
      </div>
    </div>
  );
};
export default Service;
