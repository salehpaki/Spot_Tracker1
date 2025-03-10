import React from 'react';

const Hero4 = ({ onShowHero5 }) => {
  return (
    <div className="bg-black text-white py-12 flex flex-col items-center text-center px-6 -mt-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl">
        Ready to Automate Your <span className="font-bold">Inventory Management?</span>
      </h2>
      
      {/* Subtext */}
      <p className="text-gray-400 mt-3 max-w-lg">
        Discover how Spot Tracker can transform your inventory management process.
      </p>
      
      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
          onClick={onShowHero5}
        >
          Request a Free Demo
        </button>
        <button 
          className="border-2 border-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition-all"
          onClick={onShowHero5}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero4;
