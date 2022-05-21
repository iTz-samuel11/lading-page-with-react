import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Nav />
		</React.Fragment>
	);
};

export default Home;

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a
					className="navbar-brand"
					href="#"
					style={{
						color: "white",
						marginRight: "72%",
						marginLeft: "3%",
					}}>
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler btn-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active text-light"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
