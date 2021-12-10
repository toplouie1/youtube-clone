import React, { Component } from "react";
import "./Home.css";
import {Link} from "react-router-dom"

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			fetchdata: [],
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
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.searchValue}&type=video&key=AIzaSyAy4drePBpLUxVGLeDlqaOi3PMlu1mSmMU`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					fetchdata: data.items,
					searchValue: ""
				});
			});
	};

	viewVideo=(e)=>{
		this.setState({
			vidId: e.id.videoId
		});
	}

	render() {

		let videos = this.state.fetchdata.map((vid) => {
			return (
				<div>
					<div className="vid">
						<div onClick={()=>this.props.updateVideoObject(vid)}>
							<Link to={`/Video/${vid.id.videoId}`}>
								<img src={vid.snippet.thumbnails.high.url} alt ={vid.snippet.title}/>
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
						value={this.state.searchValue}
					/>
					</span>
					<span><button className="submit" type="submit">
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
