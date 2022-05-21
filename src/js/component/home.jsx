import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
			<div className="container-fluid">
				<a
					className="navbar-brand text-light"
					href="#"
					style={{
						color: "white",
						marginRight: "68%",
						marginLeft: "5%",
					}}>
					{"Start Bootstrap"}
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
				<div
					className="collapse navbar-collapse float-right"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active text-light"
								aria-current="page"
								href="#">
								{"Home"}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								{"About"}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								{"Services"}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								{"Contact"}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Cards = () => {
	return (
		<div className="container">
			<div className="justifi-content-center m-0 row my-3">
				<div className="card">
					<div className="card-body">
						<h1 className="card-title fs-1">{"A Warm Welcome!"}</h1>
						<p className="card-text fs-5">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Ipsa, ipsam,eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
							}
						</p>
						<a href="#" className="btn btn-primary fs-5">
							{"Call to action!"}
						</a>
					</div>
				</div>
			</div>
			<div className="d-sm-flex">
				<div className="card text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card mx-1 text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card me-1 text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body ">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary mx-auto">
							{"Find Out More!"}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const End = () => {
	return (
		<nav className="navbar navbar-dark bg-dark my-3">
			<div className="container-fluid justify-content-center">
				<p className="navbar-text text-light my-4">
					{"Copyright © Your Webside 2022"}
				</p>
			</div>
		</nav>
	);
};
