import React from "react";

const Hero2 = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h2 className="py-4 text-3xl font-bold">How it Works?</h2>
        <p className="py-0 text-lg text-gray-600 font-medium">
          Seamless Order Management in 4 Simple Steps
        </p>
      </div>


      <div className="relative flex items-center gap-36 bg-white p-20 rounded-lg shadow-md   py-4">
        {/* Text Content */}
        <div className="relative px-20 ">
          {/* Background Image or Number */}
          <div className="absolute right-0 w-auto h-auto opacity-50 ">
            <img
              src="/01.png"
              alt="Background"
              className="w-28 h-42 object-contain"
            />
          </div>

          <h3 className="text-blue-600 text-3xl mt-28">Step 1</h3>
          <h2 className="text-black font-medium text-2xl">
            Store Orders Inventory
          </h2>
          <p className="text-gray-600">
            With Spot Tracker, effortlessly manage your store’s <br /> inventory
            and streamline your ordering process.
          </p>
          
        </div>
        {/* Image on the Left */}
        <img
          src="/ff.jpg"
          alt="Step Image"
          className="md:w-1/3 rounded-lg shadow-md"
        />
      </div>
      <div className="relative flex items-center gap-36 bg-white p-20 rounded-lg shadow-md   md:py-4 col-span-10">
        {/* Text Content */}
          {/* Image on the Left */}
          <img
          src="/gg.png"
          alt="Step Image"
          className="w-1/3 rounded-lg shadow-md"
        />
        <div className="relative px-20 ">
          {/* Background Image or Number */}
          <div className="absolute right-0 w-auto h-auto opacity-50 ">
            <img
              src="/02.png"
              alt="Background"
              className="w-28 h-42 mr-80 mb-4"
            />
          </div>

          <h3 className="text-blue-600 text-3xl mt-28">Step 2</h3>
          <h2 className="text-black font-medium text-2xl">
          Back Office Approves & Generate Invoices
          </h2>
          <p className="text-gray-600">
          Our platform enables you to approve orders, generate invoices and manage payments- all in seamless Workflow.
          </p>
          
        </div>
      </div>
      <div className="relative flex items-center gap-36 bg-white p-20 rounded-lg shadow-md   py-4">
        {/* Text Content */}
        <div className="relative px-20 ">
          {/* Background Image or Number */}
          <div className="absolute right-0 w-auto h-auto opacity-50 ">
            <img
              src="/03.png"
              alt="Background"
              className="w-28 h-42 object-contain"
            />
          </div>

          <h3 className="text-blue-600 text-3xl mt-28">Step 3</h3>
          <h2 className="text-black font-medium text-2xl">
          Warehouse Packs & Delivers
          </h2>
          <p className="text-gray-600">
          With Spot Tracker, warehouse operations become faster and more efficient. Our platform enables you to optimize picking and packing, automate shipping labels, and track deliveries in real-time.
          </p>
          
        </div>
        {/* Image on the Left */}
        <img
          src="/ffj.png"
          alt="Step Image"
          className="w-1/3 rounded-lg shadow-md"
        />      
      </div>
      <div className="relative flex items-center gap-36 bg-white p-20 rounded-lg  py-4">
        {/* Text Content */}
          {/* Image on the Left */}
          <img
          src="/ffj.png"
          alt="Step Image"
          className="w-1/3 rounded-lg shadow-md"
        />
        <div className="relative px-20 ">
          {/* Background Image or Number */}
          <div className="absolute right-0 w-auto h-auto opacity-50 ">
            <img
              src="/04.png"
              alt="Background"
              className="w-28 h-42 mr-80 mb-4"
            />
          </div>

          <h3 className="text-blue-600 text-3xl mt-28">Step 4</h3>
          <h2 className="text-black font-medium text-2xl">
          Store Receives & Confirms
          </h2>
          <p className="text-gray-600">
          Our platform enables stores to quickly receive ensuring that inventory is accurately updated and customers can access the products they need.
          </p>

          
        </div>
      </div>


<div className="py-20">
      <h1 className="text-center font-bold text-5xl py-23">
        Who Can Benefit?
        </h1>
      <p className="text-center text-xl font-medium">Built for Large-Scale Industries</p>
      </div>
    </div>
  );
};

export default Hero2;
