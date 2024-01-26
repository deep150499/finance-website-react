import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-xl fobt-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platform
        </p>
        <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};
