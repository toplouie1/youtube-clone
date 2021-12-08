import React, { Component } from "react";
import Youtube from 'react-youtube';


export default class Home extends Component {
 constructor(){
	 super()

	 this.state = {
		 searchValue: "",
		 fetchdata: []

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
			 fetchdata: data.items
		 });
	 });
 }

  
 
	render() {
		let videos = this.state.fetchdata.map((vid)=>{
			return (
				<Youtube videoId={vid.id.videoId} opts={{height: '200', width:'400'}} />
				)
		})
		console.log(videos)
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
					This is where the videos display
					<div className="video">
						{videos}
					</div>
				</div>
			</div>
		);
	}
}
