import React from "react";
import Layout from "../../Layout";
import profileImg from "../../../assets/50.jpg";
import Rating from "../../Common/Rating";
import { MailIcon } from "@heroicons/react/solid";
import { PhoneOutgoingIcon } from "@heroicons/react/solid";
import Calendar from "react-awesome-calendar";
import ServiceReviews from "./ServiceReviews";

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
              <button className="bg-gray-100 text-indigo-700 mr-4 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <MailIcon className="h-5 w-5 inline" /> Message
              </button>
              <button className="bg-gray-100 text-indigo-700 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <PhoneOutgoingIcon className="h-4 w-4 inline-block mr-2 -mt-0" />
                Call
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="col-span-3 border rounded p-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Service Details
              </h3>
              <p className="text-gray-500 text-sm pb-5">
                Find all details related to this service from revies to
                appointment schedules
              </p>
              <hr className="-ml-4 -mr-4 " />
              <div className="flex mt-4 mb-4">
                <div className="w-1/2">
                  <p className="text-gray-600 pb-1 text-sm ">Category</p>
                  <p>Doctor</p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-600 pb-1 text-sm ">Price</p>
                  <p>USD 23.45</p>
                </div>
              </div>
              <hr className="-ml-4 -mr-4" />
              <div className="mt-5 mb-4">
                <p className="text-gray-600 pb-1 text-sm ">About service</p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>

              <div className="mt-5 mb-4">
                <p className="text-gray-600 text-sm  pb-2">Reviews</p>
                <ServiceReviews />
                <ServiceReviews />
                <ServiceReviews />
                <ServiceReviews />
                <ServiceReviews />
              </div>
            </div>
            <div className="col-span-2 border rounded p-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Schedule appointment
              </h3>

              <Calendar mode="daily" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
