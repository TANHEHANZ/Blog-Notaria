import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[70dvh] flex flex-col justify-center items-start overflow-hidden relative p-8 sm:p-12 md:p-16">
      <h2 className="text-sm sm:text-xl md:text-2xl font-bold uppercase">
        - Aprende sobre documentos notariales -
      </h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-primary">
        Mundo Notarial
      </h1>
      <p className="text-sm sm:text-xl md:text-2xl font-medium">
        En este blog abarca un enfoque amplio de temas notariales.
      </p>
    </header>
  );
};

export default Header;
