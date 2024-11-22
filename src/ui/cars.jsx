import React from "react";
import { VscFilePdf } from "react-icons/vsc";
const Cars = ({ title, contenido, documentos, onClick, image }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-40 max-h-52">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{contenido}</p>

      <div className=" flex justify-start items-start w-auto gap-4 ">
        {documentos?.map((doc, index) => (
          <a
            key={index}
            href={doc.name}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-primary flex justify-center items-center rounded-md"
          >
            <VscFilePdf size={24} color="white" />
          </a>
        ))}
        <button className=" border border-secondary h-full flex-grow  text-primary font-semibold rounded-md " onClick={onClick}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Cars;
