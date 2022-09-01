import React from "react";
import { Card } from "../component/card";

export function Personajes() {
  return  <>
      <h1>Personajes</h1>

      <div className="row">
        <Card ruta="/singlePersonajes/1" />
        <Card ruta="/singlePersonajes/2" />
        <Card ruta="/singlePersonajes/3" />
        <Card ruta="/singlePersonajes/4" />
        <Card ruta="/singlePersonajes/5" />
      </div>
    </>
}
