import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js"


export const FavCard = (props) => {
    const { store, actions } = useContext(Context);


    return (
        <div className="card mx-2 mb-2" style={{ width: "18rem" }}>
            <img src={props.url} className="card-img-top mt-2 rounded" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={props.ruta}>
                    <a href="#" className="btn btn-primary">
                        Más Información
                    </a>
                </Link>
                <p></p>
                <button className="btn btn-danger opacity-75"
                onClick ={ ()=> {
                    actions.remove_CharFavoritos(props.indice);
                }}
                >
                    Eliminar de Favoritos</button>

            </div>
        </div >
    );
}