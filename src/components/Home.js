import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			fetchdata: [],
			noResults: "No Search Results Yet! Please submit a search above!",
			vidId: "",
		};
	}

	setSearch = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
	};
	fetchSearchVid = (e) => {
		e.preventDefault();

		fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					fetchdata: data.items,
					noResults: "",
				});
			});
		console.log(process.env);
	};

	viewVideo = (e) => {
		this.setState({
			vidId: e.id.videoId,
		});
	};

	render() {
		console.log(this.state.vidId);
		let videos = this.state.fetchdata.map((vid) => {
			return (
				<div>
					<div className="vid">
						<div value={vid.id.videoId} onClick={() => this.viewVideo(vid)}>
							<Link to="/Video/:id">
								<img
									src={vid.snippet.thumbnails.high.url}
									alt={vid.snippet.title}
								/>
							</Link>
						</div>
					</div>
					<div className="title">{vid.snippet.title}</div>
				</div>
			);
		});
		return (
			<div>
				<div id="form-container">
					<form onSubmit={this.fetchSearchVid}>
						<span>
							<input
								className="search"
								onInput={this.setSearch}
								placeholder="Search..."
								type="text"
								id="search"
								name="search"
							/>
						</span>
						<span>
							<button className="submit" type="submit">
								Search
							</button>
						</span>
					</form>
				</div>
				<div id="display-container" className="video-container">
					{/* <div id="no-results">{this.state.noResults}</div> */}
					<div id="video">{videos}</div>
				</div>
			</div>
		);
	}
}
