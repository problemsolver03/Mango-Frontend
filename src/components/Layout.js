import React from "react";
import Header from "./Pages/HomePage/Header";
const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
