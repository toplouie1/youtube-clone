import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Video from "./components/Video";
import { Component } from "react";

class App extends Component {
	constructor(){
	super()
		this.state = {
			videoObject: {}
		}
	}
updateVideoObject=(vidContainer)=>{
	this.setState({
		videoObject: vidContainer
	})
}

	render(){

		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home updateVideoObject={this.updateVideoObject}/>
					</Route>
					<Route path="/Video/:id" render={(props) => (<Video {...props} videoObject={this.state.videoObject} />)} />
					<Route path="/About">
						<About />
					</Route>
					<Route path="/About">
						<About />
					</Route>
				</Switch>
			</div>
		);
	}
	
}

export default App;
