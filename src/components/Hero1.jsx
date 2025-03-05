import React from 'react';

const Hero1 = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Spot Tracker?</h2>
        <p className="text-gray-300 mt-3">
          Streamline inventory management, automate workflows, and gain actionable insights. 
          Boost efficiency, reduce costs, and drive business growth.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-blue-600 p-5 rounded-xl text-center">
          <img src="/ss.png" className="h-12 w-12 mx-auto" alt="Icon" />
          <h3 className="text-lg font-bold mt-3">Automated Inventory</h3>
          <p className="text-gray-200 text-sm mt-2">No need for manual orders.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-600 p-5 rounded-xl text-center">
          <img src="/sv.png" className="h-12 w-12 mx-auto" alt="Icon" />
          <h3 className="text-lg font-bold mt-3">Seamless Invoicing</h3>
          <p className="text-gray-200 text-sm mt-2">Manage approvals in real time.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-blue-600 p-5 rounded-xl text-center">
          <img src="/sc.png" className="h-12 w-12 mx-auto" alt="Icon" />
          <h3 className="text-lg font-bold mt-3">Faster Processing</h3>
          <p className="text-gray-200 text-sm mt-2">Efficient packing & delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
