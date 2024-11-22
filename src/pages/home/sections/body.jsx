import React from "react";
import Cars from "../../../ui/cars";

const Body = () => {
  const data = [
    {
      title: "Título 1",
      contenido: "Este es el contenido del título 1.",
      documentos: [{ name: "documento1.pdf" }, { name: "documento2.pdf" }],
    },
    {
      title: "Título 2",
      contenido: "Este es el contenido del título 2.",
      documentos: [
        { name: "documento3.pdf" },
        { name: "documento4.pdf" },
        { name: "documento5.pdf" },
      ],
    },
  ];

  return (
    <div className="absolute w-[80%] bg-secondary rounded-t-3xl border  h-full top-[80vh] p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Cars
          key={index}
          title={item.title}
          contenido={item.contenido}
          documentos={item.documentos}
          onClick={() => console.log(`Clicked: ${item.title}`)}
        />
      ))}
    </div>
  );
};

export default Body;
