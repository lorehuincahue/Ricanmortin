import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js"


export const EpCard = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card mx-2 mb-2" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link to={props.ruta}>
                </Link>
                <p></p>
            </div>
                <button className="btn btn-outline-danger opacity-75"
                    onClick={() => {
                        actions.set_EpFavoritos(props.indice);
                    }}
                >
                    Agregar a Favoritos</button>
            </div>
    )
}