import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data/moock";
import { VscFilePdf } from "react-icons/vsc";

const Document = () => {
  const { id } = useParams();
  const documentData = data.find((item) => item.title === id);
  const navigate = useNavigate();

  const volver = () => {
    navigate("/");
  };

  if (!documentData) {
    return <div>Documento no encontrado</div>;
  }

  const imageDoc = documentData.documentos.find((doc) => doc.type === "image");

  return (
    <div className="w-full h-screen flex items-start flex-col px-4 sm:px-8 md:px-16">
      <div className="flex justify-between w-full mt-[20vh] py-4">
        <h1 className="font-bold uppercase text-sm sm:text-xl md:text-2xl">Detalle de documento</h1>
        <button
          className="px-4 h-10 bg-primary flex justify-center items-center rounded-md text-white"
          onClick={volver}
        >
          Volver
        </button>
      </div>

      <div className="h-auto sm:h-[80%] md:h-[65%] w-full flex flex-col md:flex-row justify-center items-center bg-white rounded-2xl overflow-hidden">
        <section className="flex-grow p-4 sm:p-8 md:p-16 text-sm sm:text-base md:text-lg">
          <h1 className="text-lg sm:text-3xl md:text-3xl font-bold">{documentData.title}</h1>
          <p className="py-2 md:text-sm ">{documentData.contenido}</p>

          {documentData.documentos.map((doc, index) => (
            <div key={index}>
              {doc.type === "pdf" && (
                <>
                  <strong>{doc.fileName}</strong>
                  <a
                    href={doc.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 bg-primary flex justify-center items-center rounded-md gap-4 text-white mt-2"
                  >
                    <p>Descargar</p> <VscFilePdf color="white" />
                  </a>
                </>
              )}
            </div>
          ))}
        </section>

        {imageDoc && (
          <img
            src={imageDoc.name}
            alt={documentData.title}
            className="w-full md:w-1/2 h-full object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default Document;
