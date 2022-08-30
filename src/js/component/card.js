import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.contenido}</p>
        <Link to={props.ruta}>
        <a className="btn btn-primary">
          {" "}
          {props.button}
        </a>
        </Link>
      </div>
    </div>
  );
}
