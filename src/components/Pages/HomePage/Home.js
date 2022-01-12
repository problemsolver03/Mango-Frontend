import React, { useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import Recommended from "./Recommended";
import Layout from "../../Layout";
import Login from "./Login";
const Home = () => {
  return (
    <Layout>
      <Search />
      <Recommended />
      <Categories />
    </Layout>
  );
};

export default Home;
