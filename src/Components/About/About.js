import React, { Component } from "react";
import "./about.css";
import { Container, Col, Row, Button } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component {
	render() {
		return (
			<ScrollableAnchor id={"About"}>
				<div>
					<Container fluid={true} className="about-global-wrap-custom">
						<h3>A PROPOS</h3>
						<Container className="about-wrap-custom">
							<Row className="about-tidy">
								<Col lg={6} md={12}>
									<Row className="social-tidy">
										<Col lg={6} md={6} className="picture-col">
											<img
												src={process.env.PUBLIC_URL + "./images/about-2.jpg"}
												alt="aboutPicture"
												className="media-about"
											/>
										</Col>
										<Col className="social-col" lg={6} md={6}>
											<h5>RESEAUX</h5>
											<Button
												className="github-button mr-2 mb-5 mt-2"
												href="https://github.com/MatPlume"
												target="_blank"
											>
												<i className="fa fa-github" />
											</Button>
											<Button
												className="linkedin-button mr-2 mb-5 mt-2"
												href="https://www.linkedin.com/in/matthieu-petit-13953a5/"
												target="_blank"
											>
												<i className="fa fa-linkedin" />
											</Button>
											<Button
												className="twitter-button mr-2 mb-5 mt-2"
												href="https://twitter.com/Rockaillou"
												target="_blank"
											>
												<i className="fa fa-twitter" />
											</Button>
											<h5>ME CONTACTER</h5>
											<Row className="contact-custom ml-0 mt-3">
												<Col
													className="phone-col pl-0 mb-1"
													lg={12}
													md={12}
													sm={12}
												>
													<Button
														className="phone-button pt-0 mr-2 mb-2"
														href="tel:+33642604674"
													>
														<i className="fa fa-mobile" />
													</Button>
													<span className="phone-custom">0642604674</span>
												</Col>
												<Col className="email-col pl-0" lg={12} md={12} sm={12}>
													<Button className="email-button mr-2 mb-2">
														<i className="fa fa-envelope" />
													</Button>
													<span id="email" className="email-custom">
														matthieuwpetit@gmail.com
													</span>
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
								<Col className="profile-col" lg={6} md={12}>
									<h5>MON PROFIL</h5>
									<p>
										{" "}
										Un développeur front créatif . Depuis 5 ans, basé à Bilac
										(près de Saint-Nazaire) participe au design, à l’intégration
										et au développement d’applications web.
									</p>
									<p>
										Participer au développement front-end d’un projet web est
										mon quotidien depuis 5 ans{" "}
										<span role="img" aria-label="">
											🧑🏻‍💻
										</span>
										... Ce que je préfère dans l’exercice, c’est développer des
										interfaces recherchées, claires et ergonomiques, plus
										particulièrement dans le cadre mobile... J’aime la logique
										stricte du développement et avoir à trouver la réponse
										technique à un besoin fonctionnel. J’apprécie
										l’interdépendance entre le développement front-end,
										l’intégration pure et le processus de design qui les
										sous-tend puisqu’ils sont intimement lié
									</p>
								</Col>
							</Row>
						</Container>
					</Container>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default About;
