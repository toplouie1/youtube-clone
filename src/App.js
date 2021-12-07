import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path="/Home">
					<Home />
				</Route>
				<Route exact path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
