import React from "react";
import userImage from "../../../assets/50.jpg";
import { Link } from "react-router-dom";
import Rating from "../../Common/Rating";

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
          <Rating />
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
