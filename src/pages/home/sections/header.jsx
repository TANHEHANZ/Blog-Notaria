import React from "react";
import img1 from "./../../../assets/img.jpg";

const Header = () => {
  return (
    <header className="w-full h-[100dvh] bg-white flex justify-center items-center overflow-hidden">
      <img
        src={img1}
        alt="Img1"
        className="w-[45%] h-full object-cover"
   
      />
      <section className=" w-full h-full flex justify-center items-center flex-col gap-2 ">
        <h1 className="text-7xl font-bold text-primary">Blog Notarial</h1>
        <h2 className="text-3xl font-bold ">¡Bienvenido!</h2>
        <p className="font-light">Abrarca un enfoque amplio de temas notariales.</p>
      </section>
    </header>
  );
};

export default Header;
