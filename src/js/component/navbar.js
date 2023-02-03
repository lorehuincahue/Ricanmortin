import React from "react";
import { Link } from "react-router-dom";
import RyMLogoImage from "../../img/rymlogo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-brand bg-black">
      <div className="container-fluid">
        <Link to="/">
          <img src={RyMLogoImage} />
        </Link>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/favoritos">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg"
                  style={{ height: "100px" }}
                >
                  Favoritos
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
