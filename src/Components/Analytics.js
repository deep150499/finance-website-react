import React from "react";
import Laptop from "../images/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eum
            corrupti deserunt qui! Quo facere distinctio, illum at reprehenderit
            perspiciatis nostrum voluptatem! Porro tenetur ab harum recusandae
            praesentium, unde totam.
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
