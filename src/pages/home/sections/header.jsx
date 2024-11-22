import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[70dvh]  flex flex-col justify-center items-start overflow-hidden relative p-16">
      <h2 className="text-xl font-bold uppercase ">
        - Aprende sobre documentos notariales -
      </h2>
      <h1 className="text-8xl font-bold text-primary">Mundo Notarial</h1>
      <p className="text-xl font-medium ">
        En este blog abrarca un enfoque amplio de temas notariales.
      </p>
    </header>
  );
};

export default Header;
