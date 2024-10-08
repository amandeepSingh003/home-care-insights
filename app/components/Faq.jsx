// FAQ component

"use client";

import React, { useState } from "react";


const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active FAQ
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full    bg-gray-50">
      {/* Mapping FAQ data */}
      {faqs?.map((item, index) => (
        <div key={index} className="border-gray-200 mb-4">
          <button
            onClick={() => handleToggle(index)}
            className="w-full p-4 text-left text-gray-700  rounded-lg focus:outline-none flex justify-between items-center bg-white FaqButton"
          >
            <span>{item.question}</span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Display response for active FAQ */}
          {activeIndex === index && (
            <div className="p-4 bg-white text-gray-600 text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
