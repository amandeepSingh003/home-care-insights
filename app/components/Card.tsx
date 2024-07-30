import React from "react";
interface CardProps {
  totalJobs?: number;
  percentageChange?: number;
  date?: string;
  children?: any;
}
export const Card: React.FC<CardProps> = ({
  totalJobs,
  percentageChange,
  date,
}) => {
  return (
    <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500">TOTAL JOBS</span>
        <span className="mt-2 text-4xl font-bold text-gray-900">
          {totalJobs}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div className="flex items-center px-2 py-1 text-sm font-medium text-white bg-teal rounded-md">
            <span className="mr-1">↑</span>
            {percentageChange}%
          </div>
          <span className="ml-2 text-sm font-medium text-gray-500">
            vs Last Week
          </span>
        </div>
        <span className="text-sm font-medium text-gray-500">{date}</span>
      </div>
    </div>
  );
};

export const CustomCard: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {children}
    </div>
  );
};
