import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Common/Rating";

const ProfileCard = (props) => {
  return (
    <Link to="/servicedetails/123">
      <div className="m-3 border h-36 rounded-lg flex items-center hover:bg-indigo-100 hover:rounded-2xl hover:border-violet-900">
        <img
          src={props.service.image}
          alt="userimage"
          className="w-24 h-24 rounded-2xl ml-4 border-4"
        />
        <div className="ml-4">
          <h5 className=" text-base font-semibold w-60 text-ellipsis overflow-hidden whitespace-nowrap break-all">
            {props.service.title}
          </h5>
          <p>{`#${props.service.category}`}</p>
          <Rating value={props.service.rating} />
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
