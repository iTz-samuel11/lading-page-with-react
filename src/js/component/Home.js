import React from "react";
import { Cards } from "./Cards.js";
import { End } from "./End.js";
import { Nav } from "./Nav.js";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Nav />
			<Cards />
			<End />
		</React.Fragment>
	);
};

export default Home;
