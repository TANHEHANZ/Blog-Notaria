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
    <div className=" w-screen h-screen flex  items-start flex-col px-16">
      <div className=" flex  justify-between w-full mt-[20vh] py-4">
        <h1 className=" font-bold  uppercase  ">Detalle de documento </h1>
        <button
          className="px-4 h-10 bg-primary flex justify-center items-center rounded-md"
          onClick={volver}
        >
          volver
        </button>
      </div>

      <div className="h-[65%] w-full flex justify-center items-center bg-white rounded-2xl overflow-hidden ">
        <section className="flex-grow p-16 ">
          <h1 className="text-3xl font-bold">{documentData.title}</h1>
          <p>{documentData.contenido}</p>

          {documentData.documentos.map((doc, index) => (
            <div key={index}>
              {doc.type === "pdf" && (
                <>
                  <strong>{doc.fileName}</strong>
                  <a
                    key={index}
                    href={doc.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" h-10 bg-primary flex justify-center items-center rounded-md gap-4 text-white"
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
            className=" w-1/2 h-full object-cover "
          />
        )}
      </div>
    </div>
  );
};

export default Document;
