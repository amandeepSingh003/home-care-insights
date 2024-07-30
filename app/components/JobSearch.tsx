import React from "react";

interface SearchProps {
  jobTitle: string;
  jobLocation: string;
  handleChange: any;
  handleSubmit: any;
}

const SearchForm = ({
  jobTitle,
  jobLocation,
  handleChange,
  handleSubmit,
}: SearchProps) => {
  return (
    <div className="w-full px-2 md:px-28 py-10 bg-white rounded-lg shadow-md max-w-7xl mx-auto JobSearch">
      <form className="flex flex-col lg:flex-row md:items-end justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="relative flex-1">
          <label
            htmlFor="job-title"
            className="absolute  left-3 px-1 bg-white text-sm font-medium text-gray-700"
          >
            Your next job title
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) =>
              handleChange({ name: "jobTitle", value: e.target.value })
            }
            id="job-title"
            name="job-title"
            placeholder="Job Title Function"
            className="mt-2 block w-full px-3 py-3 border border-black rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div className="relative flex-1">
          <label
            htmlFor="job-location"
            className="absolute  left-3 px-1 bg-white text-sm font-medium text-gray-700"
          >
            Job location
          </label>
          <input
            type="text"
            id="job-location"
            value={jobLocation}
            onChange={(e) =>
              handleChange({ name: "jobLocation", value: e.target.value })
            }
            name="job-location"
            placeholder="Anywhere, City, State, Zip Code, Remote"
            className="mt-2 block w-full px-3 py-3 border border-black rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div className=" md:w-fit grid md:flex  md:items-center space-x-4">
          <button
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
            className="inline-flex text-center items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Search Job &rarr;
          </button>
          {/* TODO: */}
          {/* <a
            href="#"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 text-center mt-4 md:m-0"
          >
            Advanced Search
          </a> */}
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
