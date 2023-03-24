import React, { Component } from "react";
import "./skills.css";
import ScrollableAnchor from "react-scrollable-anchor";
import TagCloud from "react-tag-cloud";

const styles = {
	large: {
		fontSize: 60,
		fontWeight: "bold",
	},
	small: {
		opacity: 0.7,
		fontSize: 16,
	},
};

class App extends Component {
	componentDidMount() {
		setInterval(() => {
			this.forceUpdate();
		}, 4000);
	}
	render() {
		return (
			<ScrollableAnchor id={"Skills"}>
				<div>
					<div className="container-fluid wrap-custom-skills">
						<h3>COMPÉTENCES</h3>
						<div className="app-outer">
							<div className="app-inner">
								<TagCloud
									className="tag-cloud"
									style={{
										fontFamily: "Poppins",
										//fontSize: () => Math.round(Math.random() * 50) + 16,
										fontSize: 30,
										padding: 5,
									}}
								>
									<div style={styles.large}>Javascript</div>
									<div style={styles.large}>React</div>
									<div style={styles.large}>Figma</div>
									<div style={{ fontFamily: "arial" }}>Git</div>
									<div style={{ fontSize: 30 }}>Scrum</div>
									<div>Html5</div>
									<div style={styles.large}>CSS3</div>
									<div style={{ fontWeight: 300 }}>MySQL</div>
									<div style={{ fontWeight: 200 }}>Agiles</div>
									<div style={{ fontWeight: 200 }}>Liquid</div>
									<div style={{ fontWeight: 200 }}>Less</div>
									<div className="javascript-skill" style={{ fontWeight: 300 }}>
										Javascript
									</div>
									<div>Bootstrap</div>
									<div className="tag-item-wrapper" />
									<div>Redux</div>
									<div style={styles.small}>Npm</div>
									<div style={styles.small}>Node</div>
									<div style={styles.small}>Final cut</div>
									<div style={styles.small}>Sketch</div>
									<div style={styles.small}>Ant-Design</div>
								</TagCloud>
							</div>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default App;
