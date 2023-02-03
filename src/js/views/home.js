import React from "react";
import personajesImage from "../../img/personajes.png";
import episodiosImage from "../../img/episodios.png";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (
  <div class="row">
    <div
      className="container text-center"
      style={{ width: "600px", backgroundColor: "black" }}
    >
      <div class="col-10">
        <Card
          titulo="Personajes"
          style="bg-black"
          ruta="/personajes"
          img={personajesImage}
        />
      </div>
      <div class="col-10">
        <Card titulo="Episodios" ruta="/episodios" img={episodiosImage} />
      </div>
    </div>
  </div>
);
