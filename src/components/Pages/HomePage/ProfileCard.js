import React from "react";
import userImage from "../../../assets/50.jpg";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Link to="/servicedetails/123">
      <div className="m-3 border h-36 rounded-lg flex items-center hover:bg-indigo-100 hover:rounded-2xl hover:border-violet-900">
        <img
          src={userImage}
          alt="user image"
          className="w-24 h-24 rounded-2xl ml-4"
        />
        <div className="ml-4">
          <h5 className=" text-lg">Mr. Superman Kumar</h5>
          <p>#Beautician, #Stylist</p>
          <div className="mt-1 flex">
            <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
