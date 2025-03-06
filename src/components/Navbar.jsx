import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = ({ onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="left-0 w-full flex justify-between items-center px-4 z-10  fixed top-0 bg-white">
      {/* Logo */}
      <div className="flex items-center py-4 mx-4">
        <img src="/hh.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg text-gray-800 font-bold gap-8">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          <button
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-xl"
            onClick={onDemoClick}
          >
            Get a Demo
          </button>
        </ul>
      )}

      {/* Get a Demo Button for Desktop */}
      <button
        className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-xl hidden md:block"
        onClick={onDemoClick}
      >
        Get a Demo
      </button>
    </nav>
  );
};

export default Navbar;
