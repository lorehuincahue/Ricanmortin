import React from "react";
import personajesImage from "../../img/personajes.png";
import episodiosImage from "../../img/episodios.png";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (

<div className="text-center mt-5">
<h1></h1>

<Card titulo="Personajes" button="Personajes >>" ruta='/personajes' />
<Card titulo="Episodios" button="Episodios >>" ruta='/episodios'/>

</div>

	);





  /*<div className="text-center mt-5" style={{ backgroundColor: "black" }}>
    <p>
      <img src={personajesImage} style={{ width: "500px" }} />
      <img src={episodiosImage} style={{ width: "500px" }} />
    </p>
  </div>*/
