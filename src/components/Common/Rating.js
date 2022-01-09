import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Rating = () => {
  return (
    <div className="mt-1 flex">
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
      <StarIcon className="w-5 h-5 text-yellow-400"></StarIcon>
    </div>
  );
};

export default Rating;
