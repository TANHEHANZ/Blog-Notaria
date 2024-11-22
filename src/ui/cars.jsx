import React from "react";
import { VscFilePdf } from "react-icons/vsc";

const Cars = ({ title, contenido, documentos, onClick }) => {
  const imageDoc = documentos.find((doc) => doc.type === "image");

  return (
    <div className="bg-secondary/20 rounded-lg border flex flex-col justify-between h-auto overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="flex flex-grow overflow-hidden">
        <div className="w-1/2 h-[15rem] p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm py-2 ">{contenido}</p>
        </div>
        {imageDoc && (
          <div className="w-1/2 h-full overflow-hidden relative">
            <img
              src={imageDoc.name}
              alt={title}
              className="w-full h-full object-cover rounded-bl-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        )}
      </div>
      <div className="flex justify-start items-center gap-4 px-4 h-14">
        {documentos?.map(
          (doc, index) =>
            doc.type === "pdf" && (
              <a
                key={index}
                href={doc.name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary flex justify-center items-center rounded-md"
              >
                <VscFilePdf color="white" />
              </a>
            )
        )}
        <button
          className="border border-secondary flex-grow text-primary font-semibold rounded-md px-4 py-2 hover:bg-primary hover:text-white"
          onClick={onClick}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Cars;
