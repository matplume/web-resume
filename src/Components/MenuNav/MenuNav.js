import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import "./menuNav.css";
import ScrollableAnchor from "react-scrollable-anchor";

class MenuNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			isOpen: false,
		};
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		window.onscroll = function() {
			setNavbar();
		};
		function setNavbar() {
			if (
				document.body.scrollTop > 100 ||
				(document.documentElement.scrollTop > 100 && window.innerWidth) > 768
			) {
				document.getElementById("custom-navbar").className =
					"navbar navbar-expand-md fadeout-navbar";
				document.getElementById("text-menu").className =
					"navbar-nav navbar text-menu-b";
				document.getElementById("text-menu-ap").className =
					"navbar-nav navbar text-menu-b";
				document.getElementById("text-menu-skills").className =
					"navbar-nav navbar text-menu-b";
				document.getElementById("text-menu-portfolio").className =
					"navbar-nav navbar text-menu-b";
				document.getElementById("text-menu-experience").className =
					"navbar-nav navbar text-menu-b";
			} else {
				document.getElementById("custom-navbar").className =
					"navbar navbar-expand-md fadein-navbar";
				document.getElementById("text-menu").className =
					"navbar-nav navbar text-menu-w";
				document.getElementById("text-menu-ap").className =
					"navbar-nav navbar text-menu-w";
				document.getElementById("text-menu-skills").className =
					"navbar-nav navbar text-menu-w";
				document.getElementById("text-menu-portfolio").className =
					"navbar-nav navbar text-menu-w";
				document.getElementById("text-menu-experience").className =
					"navbar-nav navbar text-menu-w";
			}
		}
		return (
			<ScrollableAnchor id={"MenuNav"}>
				<div>
					<Navbar className="fadein-navbar" id="custom-navbar" expand="md">
						<NavbarBrand href="/" className="resumeLogo mr-5 ml-5">
							<svg
								width="29"
								height="27"
								viewBox="0 0 29 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M19 27V0H21.5V27H19Z" fill="#E7CD24" />
								<path d="M0 27V0H2.5V13.5V27H0Z" fill="#525252" />
								<path
									d="M6.60559 1L10.7367 13.7543L15.3809 1H18L11.4388 18H9.83221L4 1H6.60559Z"
									fill="#525252"
								/>
								<path
									d="M23 13.5302H26.2878V1.45297H23V0H29V15H23V13.5302Z"
									fill="#E7CD24"
								/>
							</svg>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle}>
							<i className="fa fa-bars" />
						</NavbarToggler>
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink
										onClick={this.toggle}
										id="text-menu"
										className="text-menu-w mr-2"
										href="#MenuNav"
									>
										Accueil
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={this.toggle}
										id="text-menu-ap"
										className="text-menu-w mr-2"
										href="#About"
									>
										À propos
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={this.toggle}
										id="text-menu-skills"
										className="text-menu-w mr-2"
										href="#Skills"
									>
										Compétences
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={this.toggle}
										id="text-menu-portfolio"
										className="text-menu-w mr-2"
										href="#Portfolio"
									>
										Portfolio
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={this.toggle}
										id="text-menu-experience"
										className="text-menu-w mr-2"
										href="#Experience"
									>
										Expérience
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default MenuNav;
