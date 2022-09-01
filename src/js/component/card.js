import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="card text-center" style={{ width: "18rem;" }}>
      <Link to={props.ruta}>
      <img src={props.img} className="card-img-top" alt="..." />
      </Link>

   
    </div>
  );
}
