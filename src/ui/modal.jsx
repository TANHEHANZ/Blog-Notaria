import React from "react";

const Modal = ({ cardData, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50 transition-transform duration-300 ease-in-out"
      style={{ transform: "translateX(100%)" }} 
    >
      <div
        className="bg-white p-6 rounded-lg w-[80%] max-w-3xl"
        style={{
          transform: "translateX(0)", // Animación de entrada del modal desde la derecha
          transition: "transform 0.3s ease-in-out", // Transición para el efecto de desplazamiento
        }}
      >
        <h2 className="text-xl font-semibold mb-4">{cardData.title}</h2>
        <p className="text-sm mb-4">{cardData.contenido}</p>

        <div className="mb-4">
          {cardData.documentos?.map((doc, index) => (
            <div key={index}>
              {doc.type === "pdf" && (
                <a
                  href={doc.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PDF Documento {index + 1}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
