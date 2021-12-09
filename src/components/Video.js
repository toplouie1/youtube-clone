import React, { Component } from "react";
import "./Video.css";

export default class video extends Component {
	render() {
		return (
			<div>
				<div className="commentsContainer">
					<div>Video will be played here ...</div>
					<form className="inputContainer">
						<label className="labels" htmlFor="Name">
							Name
							<br />
							<input
								className="name"
								placeholder="Name..."
								type="text"
								id="Name"
								name="search"
							/>
						</label>
						<br />
						<label className="labels" htmlFor="Comment">
							Comment
							<br />
							<input
								className="name"
								placeholder="..."
								type="text"
								id="Comment"
								name="Comment"
							/>
						</label>
						<br />
						<button className="submitVideo" type="submit">
							Search
						</button>

						<div className="commentsSection">Mo</div>
						<div className="commentsSection">Amazing video..</div>
						<div className="commentsSection">JO</div>
						<div className="commentsSection">Wow ... great quality </div>
						<div className="commentsSection">KO</div>
						<div className="commentsSection">who is watching ?</div>
					</form>
				</div>
			</div>
		);
	}
}