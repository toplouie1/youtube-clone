import React, { Component } from "react";
import "./About.css";
import logo from "../Octocat.png";

export default class About extends Component {
	render() {
		return (
			<div className="about-main">
				<h1>YouTube-clone</h1>
				<p>
					This is a Youtube-clone that is done by the member's below making use
					of the Youtube Api and the react-youtube.
				</p>
				<div className="about-contains">
					<div className="members-about">
						<h2>Members</h2>

						<h5>Nima Sherpa</h5>
						<div>
							Hey my name is Nima sherpa I m an Software developer I love
							working on project and implementing new ideas .
						</div>
						<h5>Charlie Moran</h5>
						<div>Hello! My name is Charlie and I am a banana! 🍌</div>

						<h5>Deborah Campos</h5>
						<div>
							My name is Deborah and I am a software developer fellow at
							Pursuit.
						</div>
					</div>
					<div className="github-links">
						<h2>GitHub Links</h2>
						<a target="blank" href="https://github.com/toplouie1">
							Nima GitHub
							<img className="gitlogo" src={logo} alt="logo" />
						</a>
						<br />
						<br />
						<a target="blank" href="https://github.com/CharlieMoran">
							Charlie GitHub
							<img className="gitlogo" src={logo} alt="logo" />
						</a>
						<br />
						<br />
						<a target="blank" href="https://github.com/DeborahCampos1">
							Deborah GitHub
							<img className="gitlogo" src={logo} alt="logo" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
