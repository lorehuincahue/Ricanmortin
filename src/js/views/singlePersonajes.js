import React from "react";
import { useParams } from "react-router-dom";


export function SinglePersonajes() {
    const {theid}=useParams();
    return  <>
    <h1>Lista Personajes {theid}</h1>
    Detalle
    </>
}