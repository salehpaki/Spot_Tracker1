import React, { useState } from "react";
import Hero5 from "./Hero5";

const Hero = ({ onShowHero5 }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen justify-between px-8 text-center lg:text-left bg-white relative -mt-20">
      {/* Left Section */}
      <div className="flex flex-col md:mb-12 px-16 md:mt-0 mt-48">
        <p className="text-[40px] font-bold">
          <span className="text-blue-800/90">Revolutionize</span> Your Inventory 
          Management with
          <span className="text-blue-800/90"> Spot Tracker</span>
        </p>
        <p className="text-gray-500 text-base leading-relaxed py-4">
        The ultimate solution for large-scale industries to automate inventory orders, eliminate order bookers, and streamline operations effortlessly. 
        </p>
        <button 
          className="bg-red-600 text-white font-semibold px-6 py-3 w-48 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          onClick={onShowHero5}
        >
          Request a Free Trial
        </button>

        {/* Customer Reviews */}
        <div className="flex items-center space-x-3 py-7">
          <div className="flex -space-x-2">
            <img src="/4.png" className="h-12 w-12 rounded-full border-2 border-white" alt="User 1" />
            <img src="/5.png" className="h-12 w-12 rounded-full border-2 border-white" alt="User 2" />
            <img src="/6.png" className="h-12 w-12 rounded-full border-2 border-white" alt="User 3" />
            <img src="/3.png" className="h-12 w-12 rounded-full border-2 border-white" alt="User 4" />
          </div>
          <div className="text-gray-800 text-sm md:text-base">
            <p className="font-medium">Our Happy Customers</p>
            <p className="font-semibold flex items-center">
              ⭐ <span className="ml-1 text-lg font-bold">4.9</span> (1.8k Reviews)
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-end relative mt-6 lg:mt-0 right-26">
        <div className="relative w-full mt-32">
          <img
            src="/hs.png"
            className="relative w-[110%] right-6 max-w-5xl z-0 pointer-events-none ml-2.5 mt-8"
            alt="Dashboard Image 2"
          />
          <img
            src="/7.png"
            className="absolute top-[20px] right-40 w-2/3 mt-8"
            alt="Overlay Image"
          />
          <img
            src="284.png"
            className="absolute bottom-0 right-80 w-3/4 mb-36 ml-10 items-left"
            alt="Dashboard Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
