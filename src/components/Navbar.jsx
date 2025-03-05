import React from "react";

const Navbar = ({ onDemoClick }) => {
  return (
    <nav className="left-0 w-full flex justify-around items-center px-4 z-10 bg-white fixed top-0">
      <div className="flex items-center py-4 mx-4">
        <img src="/hh.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <ul className="flex space-x-8 text-lg text-gray-800 font-bold gap-8">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
      </ul>

      <button
        className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-xl/7"
        onClick={onDemoClick}
      >
        Get a Demo
      </button>
    </nav>
  );
};

export default Navbar;
