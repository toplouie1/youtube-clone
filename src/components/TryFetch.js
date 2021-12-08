import React, { Component } from "react";

export default class TryFetch extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	componentDidMount() {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=arianagranda&type=video&key=AIzaSyAy4drePBpLUxVGLeDlqaOi3PMlu1mSmMU"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ data: data });
			});
		console.log(this.state.data);
	}
	render() {
		return <div></div>;
	}
}
