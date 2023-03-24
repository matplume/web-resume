import React, { Component } from "react";
import { Container } from "reactstrap";
import "./media.css";
import Typing from "react-typing-animation";

class Media extends Component {
	render() {
		return (
			<div>
				<Container fluid={true} className="media-container">
					<img
						src={process.env.PUBLIC_URL + "./images/media2.jpeg"}
						alt="mediaPicture"
						className="media-home"
					/>
					<div className="my-text">
						<Typing loop={true} speed={40}>
							<p>
								<span>Matthieu Petit.</span>
							</p>
							<Typing.Delay ms={1000} />
							<Typing.Backspace count={20} />
							<p>
								<span>Développeur Front-End.</span>
							</p>
							<Typing.Delay ms={1000} />
							<Typing.Backspace count={30} />
							<p>
								<span>Javascript. React. Redux.</span>
							</p>
							<Typing.Reset count={2} delay={2000} />
						</Typing>
					</div>
				</Container>
			</div>
		);
	}
}
export default Media;
