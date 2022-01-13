import React from "react";
import Layout from "../../Layout";
const Contact = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="w-5/6 mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold mt-6 mb-2">Contact us</h2>
          <p className="w-1/2 mx-auto text-gray-600">
            We're happy that you have a query regrading our product feel free
            the write about your query our team will get in touch with you ASAP.
          </p>
        </div>
        <div className="w-1/2 grid grid-cols-2 mx-auto gap-5">
          <div>
            <label className="block text-gray-800">Firstname</label>
            <input
              type="text"
              className="p-3 border w-full rounded border-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-800">Lastname</label>
            <input
              type="text"
              className="p-3 border w-full rounded border-gray-400"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-800">Email</label>
            <input
              type="text"
              className="p-3 border w-full rounded border-gray-400"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-800">Message</label>
            <textarea className="p-3 border w-full rounded border-gray-400"></textarea>
          </div>

          <div className="col-span-2">
            <div className="">
              <p className="text-gray-500 text-center mt-3 mb-3">
                By sending your query you agree to terms and condition.
              </p>
              <button className="bg-indigo-600 text-white p-3 rounded w-full text-lg font-normal">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
