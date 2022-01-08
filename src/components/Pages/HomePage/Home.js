import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import Recommended from "./Recommended";
import Layout from "../../Layout";
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
