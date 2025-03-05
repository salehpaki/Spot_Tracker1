import React from 'react';

const Hero1 = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-6 -mt-[10px]">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Spot Tracker?</h2>
        <p className="text-gray-300 mt-3">
        Choose Spot Tracker for streamlined inventory management, automated workflows, and actionable insights. Boost efficiency, reduce costs, and drive business growth.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-blue-800/90 p-5 rounded-xl">
          <div className="flex justify-center mb-3">
            <img src="/ss.png" className="h-12 w-12" alt="Icon" />
          </div>
          <h3 className="text-balance font-bold">Automated Inventory Orders</h3>
          <p className="text-gray-200 text-sm mt-2">No need for manual order bookers.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-800/90 p-5 rounded-xl">
          <div className="flex justify-center mb-3">
            <img src="/sv.png" className="h-12 w-12" alt="Icon" />
          </div>
          <h3 className="text-balance font-bold">Seamless Approval & Invoicing</h3>
          <p className="text-gray-200 text-sm mt-2">Back office manages everything in real time.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-blue-800/90 p-5 rounded-xl">
          <div className="flex justify-center mb-3">
            <img src="/sc.png" className="h-12 w-12" alt="Icon" />
          </div>
          <h3 className="text-lg font-bold">Faster Order Processing</h3>
          <p className="text-gray-200 text-sm mt-2">Warehouse receives, packs, and delivers.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
