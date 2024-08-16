// Job Search component

import React, { useState, useCallback } from "react";
import AutocompleteList from './AutocompleteList';

const SearchForm = ({
  jobTitle,
  jobLocation,
  handleChange,
  handleSubmit,
  searchResults
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounce to get data correctly
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Toggle show suggestions
  const fetchSuggestions = (value) => {
    if (value && Array.isArray(searchResults)) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), [searchResults]);

  // Location change handler
  const handleLocationChange = (e) => {
    const value = e.target.value;
    handleChange({ name: 'jobLocation', value: value });
    debouncedFetchSuggestions(value);
  };

  // Location select handler
  const handleLocationSelect = (location) => {
    const { region, city, country } = location
    handleChange({ name: 'jobLocation', value: `${region}, ${city}, ${country}` });
    handleChange({ name: 'city', value: city });
    handleChange({ name: 'region', value: region });
    handleChange({ name: 'country', value: country });
    setShowSuggestions(false);
  };

  return (
    <div className="w-full px-2 md:px-28 py-10 bg-white rounded-lg shadow-md max-w-7xl mx-auto JobSearch">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row md:items-end justify-between space-y-4 lg:space-y-0 lg:space-x-4"
      >
        <div className="relative flex-1">
          <label
            htmlFor="job-title"
            className="absolute left-3 px-1 bg-white text-sm font-medium text-gray-700"
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
            className="absolute left-3 px-1 bg-white text-sm font-medium text-gray-700"
          >
            Job location
          </label>
          <input
            type="text"
            id="job-location"
            value={jobLocation}
            onChange={handleLocationChange}
            name="job-location"
            placeholder="Anywhere, City, State, Zip Code, Remote"
            className="mt-2 block w-full px-3 py-3 border border-black rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
          {showSuggestions && (
            <AutocompleteList suggestions={searchResults} onSelect={handleLocationSelect} />
          )}
        </div>
        <div className="md:w-fit grid md:flex md:items-center space-x-4">
          <button
            type="submit"
            disabled={!jobLocation && !jobTitle}
            className="inline-flex text-center items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Search Job &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
