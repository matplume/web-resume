import React, { Component } from 'react';
import './about.css';
import { Container, Col, Row, Button } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class About extends Component {
    render() {
        return (
          <ScrollableAnchor id={'About'}>
<div>
  <Container fluid={true} className="about-global-wrap-custom">
    <h3>A PROPOS</h3>
      <Container className="about-wrap-custom">
        <Row className="about-tidy">
          <Col lg={6} md={12}>
            <Row className="social-tidy">
              <Col lg={6} md={6} className="picture-col">
                <img src ={process.env.PUBLIC_URL + './images/mp-about2.jpeg'} alt="aboutPicture" className="media-about"></img>
              </Col >
              <Col className="social-col" lg={6} md={6}>
                <h5>RESEAUX</h5>
                <Button className="github-button mr-2 mb-5 mt-2" href='https://github.com/MatPlume' target="_blank"><i className="fa fa-github"></i></Button>
                <Button className="linkedin-button mr-2 mb-5 mt-2" href='https://www.linkedin.com/in/matthieu-petit-13953a5/' target="_blank"><i className="fa fa-linkedin"></i></Button>
                <Button className="twitter-button mr-2 mb-5 mt-2" href='https://twitter.com/Rockaillou' target="_blank"><i className="fa fa-twitter"></i></Button>
                <h5>ME CONTACTER</h5>
              <Row className="contact-custom ml-0 mt-3">
                <Col className="phone-col pl-0 mb-1" lg={12} md={12} sm={12}>
                  <Button className="phone-button pt-0 mr-2 mb-2"
                    href='tel:+33642604674'><i className="fa fa-mobile"></i>
                  </Button>
                    <span className="phone-custom">0642604674</span>
                </Col>
                <Col className="email-col pl-0" lg={12} md={12} sm={12}>
                  <Button className="email-button mr-2 mb-2"
                    ><i className="fa fa-envelope"></i>
                </Button>
                  <span id="email" className="email-custom">matthieuwpetit@gmail.com</span>
                </Col>
                </Row>
              </Col >
            </Row>
          </Col>
            <Col className="profile-col" lg={6} md={12}>
            <h5>MON PROFIL</h5>
              <p> Après l’obtention d’un DESS en conseil en organisation (Bac +5), j’ai débuté ma carrière dans le domaine du leasing informatique. Lors de mon experience en agence, ma sensibilité pour les technologies web s’est révélée. 
                  Dernièrement responsable Grands Comptes à l’école de la filière numérique, j’y ai développé une compréhension plus fine du besoin client, ansi que mon appréciation de l’importance de la connaissance métier.</p>
              <p>Fédérateur, curieux et doté d’un grand sens du service, ma sensibilité est aussi touchée par l’interfaçage et les spécificités du développement mobile. </p>
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