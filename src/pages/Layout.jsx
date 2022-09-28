import React from "react";
import {Outlet} from "react-router-dom";
import Home from "./Home";
import Event from "./Event";

const Layout = () => {
  return (
    <>
      
    
      <Outlet />
    </>
  );
};

export default Layout;