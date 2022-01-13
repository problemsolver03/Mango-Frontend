import React from "react";
import Rating from "../../Common/Rating";
import { Link } from "react-router-dom";

const SearchResultItem = ({ service }) => {
  return (
    <div className=" flex p-4 border items-center -mb-1 bg-white">
      <div className="flex flex-col items-center">
        <img
          src={service.image}
          alt="profile"
          className="rounded-full w-14 h-14 border-2"
        />
        <Rating className="mt-0" />
      </div>
      <div className="pl-5 w-5/6 pr-10">
        <p className="mb-0 font-semibold text-gray-800 text-lg">
          {service.title}
        </p>

        <p className=" text-gray-700 text-sm mb-2">
          {" "}
          <label className="block text-gray-500 font-semibold">About</label>
          {service.description}
        </p>
        <p className="text-sm text-gray-700">
          <label className="block text-gray-500 font-semibold">
            Other details
          </label>
          Service Category : {service.category}, Prices starting form USD{" "}
          {service.price}
        </p>
      </div>
      <div className="flex flex-col items-center pl-4">
        <Link
          className="border border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 p-2 pl-3 pr-3      rounded"
          to={`/servicedetails/${service._id.$oid}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default SearchResultItem;
