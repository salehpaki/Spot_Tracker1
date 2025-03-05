import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How does Spot Tracker help reduce costs?",
    answer: "Spot Tracker optimizes inventory management by reducing overstocking and improving delivery efficiency.",
  },
  {
    id: 2,
    question: "Can it integrate with your existing ERP system?",
    answer: "Yes, Spot Tracker supports integration with major ERP systems for seamless inventory management.",
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer: "Yes, Spot Tracker offers a free trial to help you evaluate its features before making a commitment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">FAQ'S</h2>
      <p className="text-gray-500 text-center mt-2">
        We've got answers to your most pressing questions about Spot Tracker.
      </p>

      {/* FAQ Items */}
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border-b pb-3 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-blue-600 font-bold text-xl">{faq.id < 10 ? `0${faq.id}` : faq.id}</span>
                <p className="text-lg font-medium">{faq.question}</p>
              </div>
              <FaChevronDown
                className={`text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
