import React from "react";
import personajesImage from "../../img/personajes.png";
import episodiosImage from "../../img/episodios.png";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (

<div className="text-center mt-5" style={{width:"500px", backgroundColor: "black"}}>
<h1></h1>

<Card titulo="Personajes" button="Personajes >>" ruta='/personajes' img={personajesImage} />
<Card titulo="Episodios" button="Episodios >>" ruta='/episodios' img={episodiosImage}/>

</div>

	);

