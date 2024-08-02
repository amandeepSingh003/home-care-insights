import React, { useState } from "react";
import Image from "next/image";
import moment from 'moment'


const JobCard = ({
  jobTitle,
  companyName,
  rating,
  postingDate,
  img,
  salaryRange,
  jobType,
  location,
  jobSummary,
  buttonLabel,
  buttonLink
}) => {

  const [showFullSummary, setShowFullSummary] = useState(false);

  const handleViewMoreSummary = () => {
    setShowFullSummary(true);
  };

  const truncatedSummary = jobSummary.length > 300 ? jobSummary.substring(0, 300) + '...' : jobSummary;

  return (
    <div className="border-b my-8">
      <div className="flex items-center mb-2">
        <Image src={img} alt={companyName} className=" mr-4" />
        <div>
          <h3 className="text-lg font-medium text-teal">{jobTitle}</h3>
          <div className="flex items-center">
            <span className="mr-1 text-xs text-black mr-2">{companyName}</span>
            {rating && (
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.374 2.45a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.374-2.45a1 1 0 00-1.175 0l-3.374 2.45c-.784.57-1.84-.197-1.54-1.118l1.286-3.951a1 1 0 00-.364-1.118l-3.374-2.45c-.783-.57-.381-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.951z" />
                  </svg>
                ))}
              </div>
            )}
            {postingDate && (
              <>
                <span className="ml-2 text-xs text-black mr-2">{moment(postingDate).startOf('hour').fromNow()}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start mb-4 space-x-2">
        {salaryRange && (
          <span className="px-2.5 py-1.5 text-xs font-medium text-teal  rounded bg-pills">
            {salaryRange}
          </span>
        )}
        <span className="px-2.5 py-1.5 text-xs font-medium border text-teal  rounded">
          {jobType}
        </span>
        <span className="px-2.5 py-1.5 text-xs font-medium border text-teal  rounded">
          {location}
        </span>
      </div>
      <p className="mb-4 text-sm text-black">
        <span
          dangerouslySetInnerHTML={{ __html: showFullSummary ? jobSummary : truncatedSummary }}
        />
        {jobSummary.length > 300 && !showFullSummary && (
          <button
            onClick={handleViewMoreSummary}
            className="text-teal ml-2"
          >
            View more
          </button>
        )}
      </p>
      {buttonLabel && buttonLink && (
        <button className="px-4 py-2 mb-5 text-sm font-medium text-teal-600 border border-teal-600 rounded hover:bg-teal hover:text-white">
          <a href={buttonLink} target="_blank">
            {buttonLabel}
          </a>
        </button>
      )}
    </div>
  );
};

export default JobCard;
