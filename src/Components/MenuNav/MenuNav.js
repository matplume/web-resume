import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './menuNav.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
      window.onscroll = function() {setNavbar()};
      function setNavbar() {
        if (document.body.scrollTop > 100 || (document.documentElement.scrollTop > 100 && window.innerWidth) > 768) {
          document.getElementById("custom-navbar").className = "navbar navbar-expand-md fadeout-navbar";
          document.getElementById("text-menu").className = "navbar-nav navbar text-menu-b"
          document.getElementById("text-menu-ap").className = "navbar-nav navbar text-menu-b"
          document.getElementById("text-menu-skills").className = "navbar-nav navbar text-menu-b"
          document.getElementById("text-menu-portfolio").className = "navbar-nav navbar text-menu-b"
          document.getElementById("text-menu-experience").className = "navbar-nav navbar text-menu-b"
        } else {
          document.getElementById("custom-navbar").className = "navbar navbar-expand-md fadein-navbar";
          document.getElementById("text-menu").className = "navbar-nav navbar text-menu-w"
          document.getElementById("text-menu-ap").className = "navbar-nav navbar text-menu-w"
          document.getElementById("text-menu-skills").className = "navbar-nav navbar text-menu-w"
          document.getElementById("text-menu-portfolio").className = "navbar-nav navbar text-menu-w"
          document.getElementById("text-menu-experience").className = "navbar-nav navbar text-menu-w"
      }
  }
        return (
          <ScrollableAnchor id={'MenuNav'}>
          <div>
          <Navbar className="fadein-navbar" id="custom-navbar" expand="md">
          <NavbarBrand href="/" className="resumeLogo mr-5 ml-5">
               MP.
                </NavbarBrand>
          <NavbarToggler onClick={this.toggle} ><i className="fa fa-bars"></i></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav   navbar>
            <NavItem> 
                    <NavLink onClick={this.toggle} id="text-menu" className="text-menu-w mr-2" href="#MenuNav" >Accueil</NavLink>
                  </NavItem>
                  <NavItem> 
                    <NavLink onClick={this.toggle} id="text-menu-ap" className="text-menu-w mr-2" href="#About" >À propos</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.toggle} id="text-menu-skills" className="text-menu-w mr-2" href="#Skills">Compétences</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink onClick={this.toggle} id="text-menu-portfolio" className="text-menu-w mr-2" href="#Portfolio">Portfolio</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink onClick={this.toggle} id="text-menu-experience" className="text-menu-w mr-2" href="#Experience">Expérience</NavLink>
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