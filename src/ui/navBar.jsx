import React from "react";

import img1 from "../assets/documents/LOGO MUNDO NOTARIAL.png";
const NavBar = () => {
  return (
    <nav className="fixed w-full h-[15vh] top-0 z-50">
      <img
        src={img1}
        alt="logo"
        className="h-full object-cover rounded-bl-lg transition-transform duration-300 transform hover:scale-110 rounded-lg"
      />
    </nav>
  );
};

export default NavBar;
