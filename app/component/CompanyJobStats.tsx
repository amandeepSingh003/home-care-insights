// components/CompanyJobStats.tsx

import Image from "next/image";
import React from "react";

interface CompanyJobStatsProps {
  companyName: string;
  extraClass?: string;
  src?: string;
  rating: number;
  newJobs: number;
  percentageChange: number;
}

const CompanyJobStats: React.FC<CompanyJobStatsProps> = ({
  companyName,
  rating,
  newJobs,
  src,
  extraClass,
  percentageChange,
}) => {
  return (
    <div className="flex mb-3 flex-col md:flex-row items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
        {src ? (
          <Image src={src} alt={`${companyName} logo`} className="w-8 h-8" />
        ) : null}
        <div className={extraClass}>
          <span className="text-lg font-medium text-gray-700">
            {companyName}
          </span>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049.927a1 1 0 011.902 0l1.714 5.297a1 1 0 00.95.686h5.608a1 1 0 01.592 1.809l-4.272 3.104a1 1 0 00-.364 1.118l1.714 5.297a1 1 0 01-1.538 1.117L10 13.773l-4.27 3.105a1 1 0 01-1.538-1.117l1.714-5.297a1 1 0 00-.364-1.118L1.271 8.719a1 1 0 01.592-1.809h5.608a1 1 0 00.95-.686L9.049.927z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <span className="text-teal-600 text-lg font-medium">
          {newJobs.toLocaleString()} New Jobs
        </span>
        <div className="flex items-center justify-center px-2 py-1 text-sm font-medium text-white bg-teal rounded-md">
          <span className="mr-1">↑</span>
          {percentageChange}%
        </div>
      </div>
    </div>
  );
};

export default CompanyJobStats;
