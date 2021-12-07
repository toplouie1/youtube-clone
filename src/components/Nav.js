import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<Link className="logo" exact to="/Home">
					Youtube
				</Link>
				<Link to="/Home">Home</Link>
				<Link to="/About">About</Link>
			</nav>
		);
	}
}
