import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar";

const Layout = () => {
  return (
    <div className=" w-full h-full relative bg-secondary/30 backdrop-blur-lg overflow-hidden flex justify-center items-center flex-col ">
       <div className="absolute w-[20rem] h-[20rem] bg-primary/50 -z-10 blur-3xl rounded-full bottom-32 -left-32"></div>
       <div className="absolute w-[20rem] h-[20rem] bg-primary/50 -z-10 blur-3xl rounded-full top-32 -right-32"></div>
       {/* <div className="absolute w-[20rem] h-[20rem] bg-primary -z-10 blur-3xl rounded-full "></div> */}
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
