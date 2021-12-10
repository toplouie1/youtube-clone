import React, { Component } from "react";
import "./Video.css";
import Youtube from "react-youtube";

export default class Video extends Component {
	render() {
		return (
			<div>
				<Youtube
					className="videoss"
					videoId={this.props.match.params.id}
					opts={{ height: "700", width: "1000" }}
				/>
				<div className="commentsContainer">
					<form className="inputContainer">
						<label className="labels" htmlFor="Name">
							Name
							<br />
							<input
								className="name"
								placeholder="Name..."
								type="text"
								onInput={this.nameComments}
								id="Name"
								name="search"
							/>
						</label>
						<br />
						<br />
						<label className="labels" htmlFor="Comment">
							Comment
							<br />
							<input
								className="name"
								onInput={this.nameComments}
								placeholder="..."
								type="text"
								id="Comment"
								name="comment"
							/>
						</label>
						<br />
						<br />
						<button className="submitVideo" type="submit">
							Search
						</button>

						<div className="commentsSection">Name : Mo</div>
						<div className="commentsSection">Amazing video..</div>
						<br />

						<div className="commentsSection">Name : JO</div>
						<div className="commentsSection">Wow ... great quality </div>
						<br />

						<div className="commentsSection">Name : KO</div>
						<div className="commentsSection">who is watching ?</div>
					</form>
				</div>
			</div>
		);
	}
}
