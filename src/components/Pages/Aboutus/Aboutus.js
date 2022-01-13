import React from "react";
import Layout from "../../Layout";
const Aboutus = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <header className="bg-white mt-4">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About us</h1>
          </div>
        </header>
        <div className="p-8 pt-0  rounded h-96">
          <p className="-mt-2 mb-4">
            Mango is an application to find services based on your needs in your
            locality, we help you find the best service experts based on thier
            service quality and user reviews. Users will be able to find the
            experts based on categories
          </p>
          <p className="">
            Users will be able to create a service and describe theier service
            details with price and recive appointments and reviews from buyers ,
            alternatilvly the users will also contact the services via email and
            phone.
          </p>

          <p className="mt-4 font-semibold mb-3">Features list</p>
          <ul className=" list-disc pl-4">
            <li>Add a service</li>
            <li>Add Reviews</li>
            <li>Book Appointments</li>
            <li>View Appointment Schedules</li>
            <li>Search for experts</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
