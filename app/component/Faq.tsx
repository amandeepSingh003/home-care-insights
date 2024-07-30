// components/FaqAccordion.tsx
"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full    bg-gray-50">
      {items.map((item, index) => (
        <div key={index} className="border-gray-200 mb-4">
          <button
            onClick={() => handleToggle(index)}
            className="w-full p-4 text-left text-gray-700  rounded-lg focus:outline-none flex justify-between items-center bg-white FaqButton"
          >
            <span>{item.question}</span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-180" : ""
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
