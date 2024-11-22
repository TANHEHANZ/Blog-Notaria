import React from "react";
import Cars from "../../../ui/cars";
import { data } from "../../../data/moock";

import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  const openCardDetails = (cardData) => {
    navigate(`/post/${cardData.title}`);
  };

  return (
    <div className="relative w-[90%] bg-white rounded-t-xl border -top-[20vh] p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 backdrop-blur-lg group">
      {data.map((item, index) => (
        <Cars
          key={index}
          title={item.title}
          contenido={item.contenido}
          documentos={item.documentos}
          onClick={() => openCardDetails(item)}
        />
      ))}
    </div>
  );
};

export default Body;
