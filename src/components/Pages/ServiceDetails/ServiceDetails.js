import React from "react";
import Layout from "../../Layout";
import profileImg from "../../../assets/50.jpg";
import Rating from "../../Common/Rating";
import { MailIcon } from "@heroicons/react/solid";
import { PhoneOutgoingIcon } from "@heroicons/react/solid";

const ServiceDetails = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto  rounded-xl border mt-5">
        <div className="bg-indigo-500 h-44 rounded-tl-xl rounded-tr-xl"></div>
        <div className="max-w-6xl mx-auto -mt-12 ">
          <div className="flex items-center">
            <div className="rounded-full">
              <img
                src={profileImg}
                alt="profile image"
                className="rounded-full border-8 border-white"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-xl font-semibold pl-4 mt-4">
                Mr. Superman Kumar
                <div className="-mt-1">
                  <Rating />
                </div>
              </h2>
            </div>
            <div className=" mt-4 w-1/3 text-right">
              <button className="border border-indigo-600 text-indigo-700 mr-4 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <MailIcon className="h-5 w-5 inline" /> Message
              </button>
              <button className="border border-indigo-600 text-indigo-700 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <PhoneOutgoingIcon className="h-4 w-4 inline-block mr-2 -mt-0" />
                Call
              </button>
            </div>
          </div>

          <div className="mt-5 mb-4">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
