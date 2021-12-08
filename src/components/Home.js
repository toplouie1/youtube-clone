import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
	render() {
		return (
			<div>
				<input
					placeholder="   ariana grande"
					type="text"
					id="search"
					className="search"
				/>
				<button type="submit" className="submit">Search</button>

				<div class="video-container"></div>
			</div>
		);
	}
}
