// components/JobsByStateMapWithImage.tsx

import React from "react";
import Image from "next/image";
import Map from "../assets/images/map.png";
interface JobsByStateMapProps {
  imageUrl: string;
  legendData: { color: string; percentage: string }[];
}

const JobsByStateMapWithImage: React.FC<JobsByStateMapProps> = ({
  imageUrl,
  legendData,
}) => {
  return (
    <div className="md:grid grid-row-1 grid-cols-2 items-center gap-36">
      <div className="w-full justify-center">
        <Image src={Map} alt="US Map" className="max-w-full h-auto" />
      </div>
      <div className="items-start mt-4">
        {legendData.map((item, index) => (
          <div className="flex items-center mt-1" key={index}>
            <div
              className={`w-4 h-4 rounded-full`}
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="ml-2 text-sm">{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsByStateMapWithImage;
