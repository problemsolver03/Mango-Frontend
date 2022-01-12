import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout";

import SearchResultItem from "./SearchResultItem";

const Search = (props) => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const loadServices = () => {
    let query = props.match.params.query;
    axios
      .get(
        `https://ap-south-1.aws.data.mongodb-api.com/app/appointmentschedulerapp-ojqay/endpoint/search?query=${query}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setServices(res.data);
        } else {
          setServices([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setServices([]);
        console.log(err);
      });
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-6">
        <h3 className="text-xl mb-4">
          Search results for <b>Doctors</b>
        </h3>

        {loading ? (
          <p>Please wait while search for services</p>
        ) : (
          <>
            {services.length < 1 ? (
              <p>No services match your search criteria , please try again</p>
            ) : (
              <>
                {services.map((service, i) => {
                  return <SearchResultItem service={service} key={i} />;
                })}
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Search;
