import React from "react";
import { Link } from "react-router-dom";
import RyMLogoImage from "../../img/rymlogo.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black bg-black mb-3 center">
			<Link to="/">
			<img src={RyMLogoImage} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light" style= {{height: "100px"}}>Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
