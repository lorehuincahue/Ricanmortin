import React, {useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const Card = (props) => {
  const { store, actions } = useContext(Context);


  return (
    <div className="card text-center" style={{ width: "18rem;" }}>
      <Link to={props.ruta}>
      <img src={props.img} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={props.ruta}>
                </Link>
                <p></p>
            </div>
   
    </div>
  );
}
