import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { withRouter } from "react-router-dom";
import bannerImg from "../../../assets/banner.svg";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchServices = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      props.history.push(`/search/${searchTerm}`);
    }
  };
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:py-20 lg:px-8 ">
        <div className="grid grid-cols-2 content-center">
          <div>
            <h2 className="text-3xl  text-gray-900 sm:text-4xl">
              <span className="block text-2xl font-bold">
                Looking for an expert?
              </span>
              <span className="block text-3xl text-indigo-600 font-bold">
                Find any expert of your choice.
              </span>
            </h2>

            <form
              className="mt-8 flex lg:mt-0 lg:flex-shrink-0 w-full items-center pt-6"
              onSubmit={searchServices}
            >
              <input
                type="text"
                className="border p-3 rounded-full w-5/6 pl-6 border-indigo-500"
                placeholder="Doctors ..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
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
            </form>
          </div>

          <div>
            <img src={bannerImg} alt="banner" className="w-96 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Search);
