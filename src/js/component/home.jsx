import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Nav />
			<Cards />
		</React.Fragment>
	);
};

export default Home;

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
			<div className="container-fluid">
				<a
					className="navbar-brand"
					href="#"
					style={{
						color: "white",
						marginRight: "72%",
						marginLeft: "3%",
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
				<div className="collapse navbar-collapse" id="navbarNav">
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
						<h1 className="card-title">{"A Warm Welcome!"}</h1>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Ipsa, ipsam,eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Call to action!"}
						</a>
					</div>
				</div>
			</div>
			<div className="d-sm-flex">
				<div className="card ">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card mx-1">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card me-1">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
