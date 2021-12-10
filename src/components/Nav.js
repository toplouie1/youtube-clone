import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "/Users/toplouie/Desktop/youtube-clone/src/logo.png";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<Link className="logo" exact to="/">
					<img src={logo} alt="logo" />
					YouTube
				</Link>
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
			</nav>
		);
	}
}
