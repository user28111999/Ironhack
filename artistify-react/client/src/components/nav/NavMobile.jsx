import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMobile({ navMobileClbk, navMobileStatus }) {
	return (
		<nav
			id="nav_mobile"
			onClick={navMobileClbk}
			className={`nav mobile ${navMobileStatus ? "is-active" : ""}`}>
			<NavLink className="link" to="/">
				home
			</NavLink>
			<NavLink className="link" to="/artists">
				artists
			</NavLink>
			<NavLink className="link" to="/albums">
				albums
			</NavLink>
			<NavLink className="link" to="/contact-us">
				contact
			</NavLink>
			<NavLink className="link" to="/signin">
				signin
			</NavLink>
		</nav>
	);
}
