import React from "react";
import Rating from "../../Common/Rating";
import { Link } from "react-router-dom";

const SearchResultItem = ({ service }) => {
  return (
    <div className="rounded flex p-4 shadow items-center mt-4">
      <div className="flex flex-col items-center">
        <img
          src={service.image}
          alt="profile Image"
          className="rounded-full w-12 h-12"
        />
        <Rating className="mt-0" />
      </div>
      <div className="pl-5">
        <p className="mb-0 font-bold">{service.title}</p>

        <p className=" text-gray-700">{service.description}</p>
        <span className=" border border-indigo-100  rounded-full pl-3 pr-3 inline-block mt-1 text-gray-700">
          {service.category}
        </span>
      </div>
      <div className="flex flex-col items-center pl-12">
        <Link
          className="bg-indigo-600 p-2 pl-3 pr-3   text-white rouded  rounded"
          to={`/servicedetails/${service._id.$oid}`}
        >
          <p className="text-center text-sm">
            starting form <b className="block text-base">USD {service.price}</b>
          </p>
          Book Appointments
        </Link>
      </div>
    </div>
  );
};

export default SearchResultItem;
