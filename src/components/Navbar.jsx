import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = ({ onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Empty div to mark home section */}
      <div id="home"></div>

      <nav className="left-0 w-full flex justify-between items-center px-4 z-10 fixed top-0 bg-white">
        {/* Logo */}
        <div className="flex items-center py-4 mx-4">
          <img src="/hh.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-lg text-gray-800 font-bold">
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("home")}>Home</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("services")}>Services</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("features")}>Features</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("testimonials")}>Testimonials</li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-1 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("home")}>Home</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("services")}>Services</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("features")}>Features</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => handleScroll("testimonials")}>Testimonials</li>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-lg"
              onClick={onDemoClick}
            >
              Get a Demo
            </button>
          </ul>
        )}

        {/* Get a Demo Button for Desktop */}
        <button
          className="bg-red-600 text-white px-4 lg:px-5 py-2 rounded-full hover:bg-red-700 text-base lg:text-lg hidden md:block"
          onClick={onDemoClick}
        >
          Get a Demo
        </button>
      </nav>
    </>
  );
};

export default Navbar;
