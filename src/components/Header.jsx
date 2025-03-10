import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-16 bg-white shadow-md py-4 md:py-6 relative">
      {/* Left Side - Logo and Description */}
      <div className="flex flex-col items-start">
        <img src="/hh.png" alt="Spot Tracker Logo" className="h-8 md:h-10 mb-2" />
        <p className="text-gray-500 text-xs md:text-sm w-60 md:w-96">
          The ultimate solution for large-scale industries to automate inventory orders, 
          eliminate order bookers, and streamline operations effortlessly.
        </p>
      </div>

      {/* Right Side - Navigation Links & Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav className={`absolute md:static top-16 right-0 w-full md:w-auto bg-white shadow-md md:shadow-none transition-all ${isOpen ? "block" : "hidden"} md:flex`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 p-4 md:p-0 border-b-2 md:border-none border-blue-600 md:border-transparent">
          <li>
            <Link to="/" className="text-black hover:text-blue-600 transition block">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-blue-600 transition block">Services</Link>
          </li>
          <li>
            <Link to="/features" className="text-black hover:text-blue-600 transition block">Features</Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-black hover:text-blue-600 transition block">Testimonials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;