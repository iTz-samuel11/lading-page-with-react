import React from "react";
import { Cards } from "./Cards.jsx";
import { End } from "./End.jsx";
import { Nav } from "./Nav.jsx";

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
