import React from "react";

const Hero3 = () => {
  return (
    
    <div className="flex flex-col lg:flex-row items-center justify-center py-8">
        
      {/* Left Side - Vertical Cards */}
     
      <div className="flex flex-col space-y-6 w-full lg:w-1/3 items-center">
        {[0, 2].map((index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center w-80"
          >
            {/* Top Image */}
            <img src={`/top${index + 1}.png`} className="w-12 h-12 mb-2" alt={`Top ${index + 1}`} />

            {/* Content */}
            <h3 className="font-semibold text-lg mb-2">
              {index === 0 ? "Manufacturers & Distributors" : "FMCG Brands"}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {index === 0
                ? "Simplify production planning and scheduling with our intuitive platform"
                : "Maximize shelf life and minimize waste with our inventory management solutions"}
            </p>

            {/* Bottom Image */}
            <img src={`/bottom${index + 1}.png`} className="w-15 h-15 mt-2" alt={`Bottom ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Centered Middle Card */}
      <div className="flex  w-full lg:w-1/3 my-6 lg:my-0">
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center w-80">
          {/* Top Image */}
          <img src="/top2.png" className="w-12 h-12 mb-2" alt="Top 2" />

          {/* Content */}
          <h3 className="font-semibold text-lg mb-2">Retail Chains & Stores</h3>
          <p className="text-gray-600 text-sm mb-3">
            Optimize store operations and reduce labor costs with our automated inventory management.
          </p>

          {/* Bottom Image */}
          <img src="/bottom2.png" className="w-15 h-15 mt-2" alt="Bottom 2" />
        </div>
      </div>

      {/* Right Side - Images */}
      <div className=" flex flex-col items-center lg:w-1/4 space-y-2">
        {["/HomeScreen.png", "/down.png"].map((src, index) => (
          <div key={index} className="w-full">
            <img src={src} className="w-75 h-60" alt={`Right Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
