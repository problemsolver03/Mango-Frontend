import React from "react";
import beautician from "../../../assets/saloon.svg";
import doctor from "../../../assets/doctor.svg";
import electrician from "../../../assets/electrician.svg";
import plumber from "../../../assets/plumber.svg";
import driver from "../../../assets/driver.svg";
import dentist from "../../../assets/dentist.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  const catList = [
    {
      name: "Beautician",
      icon: beautician,
    },
    {
      name: "Doctor",
      icon: doctor,
    },
    {
      name: "Electrician",
      icon: electrician,
    },
    {
      name: "Plumber",
      icon: plumber,
    },
    {
      name: "Dentist",
      icon: dentist,
    },
    {
      name: "Driver",
      icon: driver,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <h3 className="text-center mt-10 mb-4 text-2xl">Service Categories</h3>
      <div className="grid  md:grid-cols-6 grid-cols-1 align-c">
        {catList.map((category, i) => {
          return (
            <Link to={`/search/${category.name}`} key={i}>
              <div
                className="flex 
                          border 
                          h-40 
                          items-center 
                          justify-center 
                          flex-col 
                          rounded-lg m-3 
                          hover:border-purple-900 
                          hover:bg-cyan-100"
              >
                <img src={category.icon} alt="icon" className="w-12" />
                <p className="font-bold mt-1">{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
