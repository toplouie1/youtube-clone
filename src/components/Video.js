import React, { Component } from "react";
import "./Video.css";
import Youtube from "react-youtube";

export default class Video extends Component {
	constructor() {
		super();
		this.state = {
			comments: "",
			theComments: [
				{ comments: "Amazing video", title: "Chris" },
				{ comments: "Nice That was crazy !!", title: "Manny" },
				{ comments: "Love it  !!", title: "Mark" },
			],
		};
	}

	nameComments = (e) => {
		this.setState({
			comments: e.target.value,
		});
	};
	addingComments = (e) => {
		e.preventDefault();
		this.setState({
			comments: "",
			theComments: [
				...this.state.theComments,
				{ comments: this.state.comments, title: "super" },
			],
		});
	};

	render() {
		let commentsContainer = this.state.theComments.map((each) => {
			return (
				<div key="each">
					<h3>Name : {each.title}</h3>
					<div>Comment -- {each.comments}</div>
				</div>
			);
		});
		return (
			<div>
				<Youtube
					className="videoss"
					videoId={this.props.match.params.id}
					opts={{ height: "600", width: "1000" }}
				/>
				<div id="title-placeholder">
					{Object.keys(this.props.videoObject).length
						? this.props.videoObject.snippet.title
						: ""}
				</div>
				<div className="commentsContainer">
					<form onSubmit={this.addingComments} className="inputContainer">
						<label className="labels" htmlFor="Comment">
							<br />
							<input
								className="name"
								onInput={this.nameComments}
								value={this.state.comments}
								placeholder="Add a public comment..."
								type="text"
								id="Comment"
								name="comment"
								autoComplete="off"
							/>
						</label>
						<button className="onAdd" type="submit">
							Add
						</button>
						<br />
						<br />
					</form>
					<br />
					<br />

					<div>{commentsContainer}</div>
				</div>
			</div>
		);
	}
}
