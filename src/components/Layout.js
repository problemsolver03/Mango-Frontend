import React from "react";
import Header from "./Pages/HomePage/Header";
const Layout = (props) => {
  return (
    <div>
      <Header toggleLogin={props.toggleLogin}></Header>
      {props.children}
    </div>
  );
};

export default Layout;
