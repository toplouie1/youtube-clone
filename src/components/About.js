import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
	render() {
		return (
			<div className="about-main">
				<h1>Youtube-clone</h1>
				<p>This will be the description place</p>

				<div className="about-contains">
					<div className="members-about">
						<h2>Members</h2>

						<h5>Nima Sherpa</h5>
						<div>
							Hey my name is nima sherpa I m an aspiring software developer on
							my way to change the world.{" "}
						</div>
						<h5>Charlie Moran</h5>
						<div>charlie bio ...</div>

						<h5>Deborah Campos</h5>
						<div>deborah bio ...</div>
					</div>
					<div className="github-links">
						<h2>GitHub Links</h2>
						<a target="blank" href="https://github.com/toplouie1">
							Nima GitHub
						</a>
						<br />
						<br />
						<a target="blank" href="https://github.com/CharlieMoran">
							Charlie GitHub
						</a>
						<br />
						<br />
						<a target="blank" href="https://github.com/DeborahCampos1">
							Deborah GitHub
						</a>
					</div>
				</div>
			</div>
		);
	}
}
