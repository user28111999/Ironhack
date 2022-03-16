import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// custom tools
import useAuth from "../auth/useAuth";
import APIHandler from "../api/APIHandler";

export default function Signin(props) {
	const [email, setEmail] = useState("admin@artistify.io");
	const [password, setPassword] = useState("12345");
	const { authenticateUser, setCurrentUser } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		APIHandler.post("/signin", { email, password })
			.then((apiRes) => {
				authenticateUser(() => navigate("/dashboard"));
			})
			.catch((e) => {
				setCurrentUser(null);
			});
	};

	return (
		<React.Fragment>
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="title">Signin</h1>
				<label className="label" htmlFor="email">
					email
				</label>
				<input
					className="input"
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label className="label" htmlFor="password">
					password
				</label>
				<input
					className="input"
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="btn">ok</button>
			</form>
			<p className="parag">
				No account yet ? please{" "}
				<Link to="/signup" className="link">
					signup
				</Link>
			</p>
		</React.Fragment>
	);
}
