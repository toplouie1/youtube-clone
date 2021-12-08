import React, { Component } from "react";

import Youtube from 'react-youtube';
import "./Home.css"


export default class Home extends Component {
 constructor(){
	 super()

	 this.state = {
		 searchValue: "",
		 fetchdata: [],
		 noResults:"No Search Results Yet! Please submit a search above!"

	 }
 }

 setSearch=(e)=>{
	 this.setState({
		 searchValue: e.target.value

	 })
 }
 fetchSearchVid=(e)=>{
	 e.preventDefault();

	 fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.searchValue}&type=video&key=AIzaSyAy4drePBpLUxVGLeDlqaOi3PMlu1mSmMU`)
	 .then((res)=>{
		 return res.json();
	 }).then((data)=>{
		 this.setState({
			 fetchdata: data.items,
			 noResults: ""
		 });
	 });
 }

  
 
	render() {
		let videos = this.state.fetchdata.map((vid)=>{
			return (
				<div>
					<div className="vid">
					<Youtube videoId={vid.id.videoId} opts={{height: '200', width:'400'}} />
					</div>
					<div className="title">{vid.snippet.title}</div>
				</div>
			
				)
		})
		console.log(this.state.fetchdata)
		return (
			<div>

				<form onSubmit={this.fetchSearchVid}>
					<input onInput={this.setSearch}
						placeholder="enter search here"
						type="text"
						id="search"
						name="search"
					/>
					<button type="submit">Search</button>
				</form>

				<div id="display-container" className="video-container">
					{/* <div id="no-results">{this.state.noResults}</div> */}
					<div id="video">
						{videos}
					</div>
				</div>

				<input
					placeholder="   ariana grande"
					type="text"
					id="search"
					className="search"
				/>
				<button type="submit" className="submit">Search</button>

				<div class="video-container">
					this is where videos display 
				</div>
			</div>
		);
	}
}
