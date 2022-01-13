import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

const Recommended = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  const getServices = () => {
    axios
      .get("https://mango-api-server.herokuapp.com/services/get-services")
      .then((res) => {
        if (res.data) {
          let recommended = res.data.splice(0, 9);

          setServices(recommended);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //setLoading(false);
      });
  };
  useEffect(() => {
    getServices();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto">
      <h3 className="text-center mt-10 mb-4 text-2xl">Top rated experts</h3>

      <div className="grid  md:grid-cols-3 grid-cols-1">
        {services.map((service, i) => {
          return <ProfileCard key={i} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Recommended;
