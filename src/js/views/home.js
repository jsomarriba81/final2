import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-90"
							src="http://fitbydesigncoppell.com/wp-content/uploads/2014/05/burpee_fries_post.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Customized workouts to counter your fast food meals</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-90"
							src="https://i.pinimg.com/originals/5d/77/ad/5d77adca05eb2ad971f559b2fafd2fea.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>All the major fast food chains included</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-90"
							src="https://www.unilad.co.uk/wp-content/uploads/2016/03/Screen-Shot-2016-03-04-at-17.26.35.png"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Keep track of your fast food calorie intake</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div className="jumbotron bg-danger p-3">
					<h1 className="display-4 bg-danger text-white text-center text-weight-bold">TRY IT NOW!</h1>
				</div>
				<div className="search">
					<div className="container">
						<button type="button" id="button2" className="btn btn-dark btn-lg btn-block">
							Search Food Database
						</button>
					</div>
				</div>
				<div className="container">
					<table className="table table-bordered bg-dark text-white">
						<thead>
							<tr>
								<th scope="col">Food Item</th>
								<th scope="col">Calories</th>
								<th scope="col">Counter</th>
								<th scope="col">Calories Burned</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Big Mac</th>
								<td>500</td>
								<td>200 sit ups/4 minutes</td>
								<td>300</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="jumbotron bg-danger p-3">
					<p className="display-8 text-white text-center">
						Sign up today and get a personalized profile with alternative meals and workouts!
					</p>
				</div>
			</div>
		);
	}
}
