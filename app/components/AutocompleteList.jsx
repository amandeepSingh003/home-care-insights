import React from 'react';

const AutocompleteList = ({ suggestions, onSelect }) => {
    return (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
            {suggestions.map((suggestion, index) => (
                <li
                    key={index}
                    onClick={() => onSelect(suggestion)}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                >
                    {suggestion.region}, {suggestion.city}, {suggestion.country}
                </li>
            ))}
        </ul>
    );
};

export default AutocompleteList;
