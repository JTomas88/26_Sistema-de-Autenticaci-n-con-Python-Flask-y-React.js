import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Cerrar sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
