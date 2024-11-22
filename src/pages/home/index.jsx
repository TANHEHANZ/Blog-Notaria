import React from "react";
import Header from "./sections/header";
import Body from "./sections/body";

const Home = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
