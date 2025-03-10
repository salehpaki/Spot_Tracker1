import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = ({ onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false); 
  };

  return (
    <>
      <div id="home"></div>

      <nav className="left-0 w-full h-auto flex items-center justify-between px-4 py-2 md:px-8 bg-white fixed top-0 z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/hh.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base lg:text-lg text-gray-800 font-bold">
          <li
            className="hover:text-blue-800/90 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="hover:text-blue-800/90 cursor-pointer"
            onClick={() => handleScroll("services")}
          >
            Services
          </li>
          <li
            className="hover:text-blue-800/90 cursor-pointer"
            onClick={() => handleScroll("features")}
          >
            Features
          </li>
          <li
            className="hover:text-blue-800/90 cursor-pointer"
            onClick={() => handleScroll("testimonials")}
          >
            Testimonials
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-800 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-[50px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
            <li
              className="hover:text-blue-800/90 cursor-pointer"
              onClick={() => handleScroll("home")}
            >
              Home
            </li>
            <li
              className="hover:text-blue-800/90 cursor-pointer"
              onClick={() => handleScroll("services")}
            >
              Services
            </li>
            <li
              className="hover:text-blue-800/90 cursor-pointer"
              onClick={() => handleScroll("features")}
            >
              Features
            </li>
            <li
              className="hover:text-blue-800/90 cursor-pointer"
              onClick={() => handleScroll("testimonials")}
            >
              Testimonials
            </li>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-lg"
              onClick={onDemoClick}
            >
              Get a Demo
            </button>
          </ul>
        )}

        {/* Desktop "Get a Demo" Button */}
        <button
          className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-lg"
          onClick={onDemoClick}
        >
          Get a Demo
        </button>
      </nav>
    </>
  );
};

export default Navbar;
