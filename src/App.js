import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

// import YouTube from "react-youtube";

function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
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

export default App;
