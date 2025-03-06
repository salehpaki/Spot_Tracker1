import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  "Your Full Name",
  "Company Name",
  "Job Title",
  "Email Address",
  "Phone No",
];

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(-1); // Start with -1 to show the welcome message first
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true); // Show loading animation initially

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Hide loading animation after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const validateField = () => {
    const currentField = Object.keys(formData)[step];
    const value = formData[currentField];

    if (!value.trim()) {
      alert("Please fill in this field.");
      return false;
    }

    if (step === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (step === -1 || validateField()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(step + 1);
      }, 1000); // Add 1-second delay before moving to the next question
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (validateField()) {
      alert("Thank you for your submission!");
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      nextStep();
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-blue-800/90 p-4 border-8 rounded-xl relative">
      <div className="flex w-full h-full rounded-2xl shadow-xl items-center justify-center space-x-8 p-3">
        {/* Side Panel */}
        <div className="py-32 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-20 h-full justify-center text-center relative">
          <img src="/hh.png" alt="Logo" className="w-50 mb-6 h-10 top-[0]" />
          <div className="space-y-6 relative w-full mt-4">
            {steps.map((s, index) => (
              <motion.div
                key={index}
                className={`text-lg flex items-center ${index === step ? "font-bold text-blue-700" : "text-gray-400"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  {index === step ? "🔵" : "⚪"}
                  <span className="ml-2">{s}</span>
                </div>
              </motion.div>
            ))}
            <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gray-300"></div>
          </div>
        </div>

        {/* Main Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="py-36 w-3/4 h-full bg-white p-16 rounded-2xl flex flex-col justify-center items-start relative shadow-lg"
        >
          {/* Back Button */}
          <img
            src="/dd.png"
            alt="Back"
            className="absolute top-2 left-2 cursor-pointer w-16"
            onClick={() => window.location.href = "/"}
          />
          <motion.div
            key={step}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            className="flex items-center mb-6 space-x-4 w-full"
          >
            <img src="/cc.png" alt="Question Icon" className="w-16" />
            {loading ? (
              <div className="flex space-x-3">
                <motion.div className="w-2 h-2 bg-blue-400 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.4 }}></motion.div>
                <motion.div className="w-2 h-2 bg-blue-500 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.4, delay: 0.1 }}></motion.div>
                <motion.div className="w-2 h-2 bg-blue-500 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.4, delay: 0.2 }}></motion.div>
              </div>
            ) : step === -1 ? (
              <p className="text-xl font-semibold text-gray-800 text-left w-full">
                Hi there! Let’s get to know each other first. What’s your name?
              </p>
            ) : (
              <p className="text-xl font-semibold text-gray-800 text-left w-full">
                {steps[step]}
              </p>
            )}
          </motion.div>

          {!loading && step !== -1 && (
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              type={step === 3 ? "email" : "text"}
              name={Object.keys(formData)[step]}
              value={formData[Object.keys(formData)[step]]}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full p-4 border-b-2 border-blue-600 focus:outline-none text-lg text-left"
              placeholder={steps[step]}
            />
          )}

          <div className="flex gap-4 mt-6 w-full">
            {step > 0 && (
              <button onClick={prevStep} className="border border-gray-400 text-black px-6 py-2 rounded-full bg-white shadow-md">
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button onClick={nextStep} className="border border-gray-400 text-black px-6 py-2 rounded-full bg-white shadow-md">
                Next
              </button>
            ) : step === -1 ? (
              <button onClick={nextStep} className="border border-gray-400 text-black px-6 py-2 rounded-full bg-white shadow-md">
                Start
              </button>
            ) : (
              <button onClick={handleSubmit} className="border border-gray-400 text-black px-6 py-2 rounded-full bg-white shadow-md">
                Submit
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiStepForm;
