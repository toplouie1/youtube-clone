import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Video from "./components/Video";

function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/Video/:id">
					<Video />
				</Route>
				<Route path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
