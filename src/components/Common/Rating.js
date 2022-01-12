import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Rating = (props) => {
  return (
    <div className={`mt-1 flex ${props.className ? props.className : ""}`}>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
    </div>
  );
};

export default Rating;
