import React from "react";


export const Card = (props) => {
    return (
        <div className="card mx-2 mb-2" style={{ width: "18rem" }}>
            <img src={props.url} className="card-img-top mt-2 rounded" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}.</p>
                <a href="#" className="btn btn-primary"> {props.title} </a>
            </div>
        </div>
    );
}