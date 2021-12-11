import React, { Component } from "react";
import "./Video.css";
import Youtube from "react-youtube";

export default class Video extends Component {
	constructor() {
		super();
		this.state = {
			comments: "",
			theComments: "",
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
			theComments: this.state.comments,
			comments: "",
		});
	};

	render() {
		let addingCommentsPage = () => {
			return (
				<div className="commentsSection">Name : {this.state.theComments}</div>
			);
		};

		console.log(this.props);
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
						<button
							className="onAdd"
							conClick={this.addingCommentsPage}
							type="submit"
						>
							Add
						</button>

						<br />
						<br />
					</form>
					<div>{addingCommentsPage}</div>
				</div>
			</div>
		);
	}
}
