import React, { useState } from "react";
import { motion } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

const Hero5 = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center p-6 bg-gray-900 py-5">
      {!showForm ? (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 relative"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 bg-blue-800/90 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
            onClick={onClose}
          >
            ✕
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <img src="/hh.png" alt="Spot Tracker Logo" className="h-12 w-auto mt-4" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mt-4 py-4"
          >
            <span className="text-blue-800/90">Revolutionize</span> Your Inventory
            Management with <span className="text-blue-800/90">Spot Tracker</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mt-3 py-3"
          >
            The ultimate solution for large-scale industries to automate inventory
            orders, eliminate order <br/> bookers, and streamline operations effortlessly.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            className="flex mt-4 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 text-md/7"
              onClick={() => setShowForm(true)}
            >
              Book Your Demo
            </motion.button>
          </motion.div>

         {/* Simple Card Component */}
<motion.div
  className="bg-blue-800/90 text-white p-4 rounded-xl max-w-sm absolute bottom-6 right-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <p className="text-sm">
    We’ve seen a significant reduction in transportation cost and improved
    delivery times since implementing Spot Tracker. Their route optimization
    algorithms have been a game changer for our business.
  </p>
  <div className="flex items-center mt-3">
    <img
      src="/Ellipse3.png"
      alt="Sarah John"
      className="w-20 h-20 rounded-full border-2 border-white mr-2"
    />
    <div>
      <p className="font-bold text-sm">Sarah John</p>
      <p className="text-xs">Organization: Logistics Manager, Nestle</p>
    </div>
  </div>
</motion.div>
        </motion.div>
      ) : (
        <MultiStepForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Hero5;
