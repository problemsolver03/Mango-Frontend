import React, { useEffect } from "react";
import Layout from "../../Layout";
import Tabs from "./Tabs";
import Cookies from "universal-cookie/es6";

const Dashboard = (props) => {
  useEffect(() => {
    let cookies = new Cookies();
    let token = cookies.get("token");

    if (!token) {
      props.history.push("/");
    }
  }, []);
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <header>
          <h3 className="mt-10 mb-4 text-2xl">
            Welcome! <span className="text-indigo-500">Abraham Lincoln </span>
            <p className="text-lg">
              <small>Check your appointments, services and reviews here.</small>
            </p>
          </h3>
        </header>

        <Tabs />
      </section>
    </Layout>
  );
};

export default Dashboard;
