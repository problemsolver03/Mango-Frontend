import React from "react";
import profileImg from "../../../assets/50.jpg";
import Rating from "../../Common/Rating";
const ServiceReviews = () => {
  return (
    <div className="flex border-b pb-2 mt-2">
      <img
        src={profileImg}
        alt="profile Image"
        className="rounded-full h-11 w-11"
      />
      <div className="pl-2">
        <Rating />
        <p className="text-gray-800">
          Great service provied by the doctor loved it.
        </p>
      </div>
    </div>
  );
};

export default ServiceReviews;
