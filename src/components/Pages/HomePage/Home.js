import React, { useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import Recommended from "./Recommended";
import Layout from "../../Layout";
import Login from "./Login";
const Home = () => {
  const [showLogin, setLoginStatus] = useState(false);
  const toggleLogin = () => {
    setLoginStatus(!showLogin);
  };
  return (
    <Layout toggleLogin={toggleLogin}>
      <Search />
      <Recommended />
      <Categories />
      <Login show={showLogin} toggleLogin={toggleLogin} />
    </Layout>
  );
};

export default Home;
