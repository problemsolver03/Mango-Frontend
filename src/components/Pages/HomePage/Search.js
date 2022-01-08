import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:py-20 lg:px-8 ">
        <h2 className="text-3xl  text-gray-900 sm:text-4xl text-center">
          <span className="block ">Looking for an expert?</span>
          <span className="block text-indigo-600 ">
            Find any expert of your choice.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 w-full items-center justify-center pt-6">
          <input
            type="text"
            className="border p-3 rounded-full w-1/2 pl-6"
            placeholder="Doctors ..."
          />
          <button
            type="submit"
            className="bg-indigo-700 
            text-white 
            rounded-full 
            p-3 pr-8 pl-8 -ml-32 hover:bg-indigo-900 hover:transition-all border-0"
          >
            <SearchIcon
              className="h-4 w-4 inline-block -mt-1"
              aria-hidden="true"
            />{" "}
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
