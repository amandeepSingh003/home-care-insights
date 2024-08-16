"use client";

import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement
);


const JobMarketAnalysis = ({
  pieData,
  barData,
}) => {
  const pieChartData = {
    labels: pieData.map((d) => d.name),
    legend: false,
    datasets: [
      {
        data: pieData.map((d) => d.value),
        backgroundColor: pieData.map((d) => d.color),
      },
    ],
  };

  const barChartData = {
    labels: barData.map((d) => d.name),
    legend: false,
    datasets: [
      {
        borderSkipped: false,
        label: "Value",
        data: barData.map((d) => d.value),
        backgroundColor: barData.map((d) => d.color),
      },
    ],
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 10,
            },
          },
        },
      },
    },
  };

  const barChartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false, // Hide y-axis
        grid: {
          display: false, // Hide grid lines
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          <div className="w-64 h-64">
            {/* Piechart */}
            <Pie data={pieChartData} />
          </div>
          <div className="mt-2 text-sm">
            <ul>
              {/* Mapping piechart legend */}
              {pieData.map((entry, index) => (
                <li key={index} className="flex items-center">
                  <span
                    className="w-3 h-3 inline-block mr-2 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  {entry.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 lg:mt-0 lg:ml-8">
          <div className="w-full">
            {/* Bar chart */}
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-black">Source: Talentify Research Team</p>
    </div>
  );
};

export default JobMarketAnalysis;
