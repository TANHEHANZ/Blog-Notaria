import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar";

const Layout = () => {
  return (
    <div className=" w-full h-full ">
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
