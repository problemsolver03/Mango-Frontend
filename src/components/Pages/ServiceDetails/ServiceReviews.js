import React from "react";
import profileImg from "../../../assets/50.jpg";
import Rating from "../../Common/Rating";
const ServiceReviews = (props) => {
  if (props.reviews.length < 1) {
    return null;
  }
  return (
    <>
      {props.reviews.map((review, i) => {
        return (
          <div className="flex border-b pb-2 mt-2" key={i}>
            <span className="flex items-center justify-center bg-cyan-700 text-center h-9 w-9 mt-2 rounded-full">
              <span className="text-white">
                {review.user.charAt(0).toUpperCase()}
              </span>
            </span>
            <div className="pl-2">
              <p className="text-gray-800">{review.review}</p>
              <Rating value={review.rating} className="-mt-0" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceReviews;
