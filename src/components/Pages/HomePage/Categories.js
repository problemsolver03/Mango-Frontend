import React from "react";
import beautician from "../../../assets/saloon.svg";
import doctor from "../../../assets/doctor.svg";
import electrician from "../../../assets/electrician.svg";
import plumber from "../../../assets/plumber.svg";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h3 className="text-center mt-10 mb-4 text-2xl">Service Categories</h3>
      <div className="grid  md:grid-cols-6 grid-cols-1">
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={beautician} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Beautician</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={doctor} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Doctor</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={electrician} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Electrician</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={plumber} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Plumber</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={electrician} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Electrician</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={plumber} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Plumber</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={electrician} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Electrician</p>
        </div>
        <div className="flex border h-40 items-center justify-center flex-col rounded-lg m-3">
          <img src={plumber} alt="icon" className="w-12" />
          <p className="font-bold mt-1">Plumber</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
