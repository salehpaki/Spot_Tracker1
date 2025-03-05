import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-6 bg-white shadow-md py-8">
      {/* Left Side - Logo and Description */}
      <div className="flex flex-col items-start">
        <img src="/hh.png" alt="Spot Tracker Logo" className="h-10 mb-2" />
        <p className="text-gray-500 text-sm w-96">
          The ultimate solution for large-scale industries to automate inventory orders, 
          eliminate order bookers, and streamline operations effortlessly.
        </p>
      </div>

      {/* Right Side - Navigation Links */}
      <nav className="relative">
        <ul className="flex space-x-10 pb-2 border-b-2 border-blue-600">
          <li>
            <Link to="/" className="text-black hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-blue-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/features" className="text-black hover:text-blue-600 transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-black hover:text-blue-600 transition">
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
