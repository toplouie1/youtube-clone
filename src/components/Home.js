import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div>
				<input
					placeholder="Ariana granda "
					type="text"
					id="search"
					name="search"
				/>
				<button type="submit">Search</button>

				<div class="video-container"></div>
			</div>
		);
	}
}
