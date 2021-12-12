import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../logo.png";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<div id="container-logo">
					<Link className="logo" exact to="/">
						<img src={logo} alt="logo" />
						<div className="logo-name">BananaTube</div>
					</Link>
				</div>
				<div id="theAnchor">
					<Link to="/About">About</Link>
					<Link to="/">Home</Link>
				</div>
			</nav>
		);
	}
}
