import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";
import { EpCard } from "../component/CardEpisodios";

export const Personajes = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        className=" bg-light opacity-75 mx-auto my-5 text-center"
        style={{ width: "80%" }}
      >
        <h1 className="display-5">Personajes</h1>
      </div>

      <div className="text-center mt-5 row">
        {store.characters?.map((obj, index) => {
          return (
            <EpCard
              key={index}
              title={obj.name}
              status={obj.status}
              url={obj.image}
              ruta={`/personajes/detail/${obj.id}`}
              indice={obj.id}
            />
          );
        })}
      </div>
    </>
  );
};
