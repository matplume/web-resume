import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardTitle, CardSubtitle, CardBody, CardImg, CardFooter } from 'reactstrap';
import './portfolio.css';
import ScrollableAnchor from 'react-scrollable-anchor';


class Portfolio extends Component {
    render() {
        return (
          <ScrollableAnchor id={'Portfolio'}>
            <div>
              <Container fluid={true} className="container-xp-custom pt-5"> 
                <h3>PORTFOLIO</h3>
                  <Row className="row-custom-xp pb-5">
                    <Col lg="4" md="6">
                      <a href="https://awcs.github.io/" target="_blank">
                        <Card className="card-custom ml-4 mr-4 mb-4" >
                          <CardImg top src ={process.env.PUBLIC_URL + './images/Cinereact.png'} alt="project picture" className="project_picture"/>
                          <CardBody className="card-body-custom pb-1">
                            <CardTitle>CINEREACT</CardTitle>
                            <CardSubtitle className="custom-subtitle mb-2">Web app de gestion de film</CardSubtitle>
                            <CardText className="custom-cardText mt-3"><img src ={process.env.PUBLIC_URL + './images/sandglass-512.png'} alt="time-Picture" className="time-logo mb-1 mr-2"></img> 10 jours <img src ={process.env.PUBLIC_URL + './images/team3.png'} alt="time-Picture" className="team-logo ml-4 mb-1 mr-2"></img>4</CardText>
                              <div>
                              <hr></hr>
                              </div>
                          </CardBody>
                          <CardFooter className="card-footer-custom pt-1 pb-3"> 
                            <img src ={process.env.PUBLIC_URL + './images/react-logo.png'} alt="gitPicture" className="git-logo ml-3 mb-1"></img>
                            <svg className="picto-card-custom ml-2 mr-2" viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>
                            <svg className="picto-card-custom ml-2 mr-2" viewBox="0 0 128 128">
                            <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>
                            <svg className="picto-card-custom ml-2 mr-2" viewBox="0 0 128 128">
                            <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>
                            <svg className="scrum-card-custom ml-2 pb-0 pt-1 mr-2" viewBox="0 0 128 128">
                            <path d="M83.6,73L81,75.9l2.5,2.3H67.4c-1,0.8-2,1.6-3.1,2.2c-1.4,0.9-2.8,1.6-4.2,2.2h24l-2.9,2.9l2.4,2.7l7.7-7.8   L83.6,73z"/><path fill="#000000" d="M18.1,47.6l-0.9-2.3c-2.6,11.3,1.4,23.1,10.2,30.4h8c-11-5.4-16.7-17.7-13.9-29.4L18.1,47.6z"/><path fill="#000000" d="M29,41.6l-1.6-3.5L24,39.6c6.4-11.7,20.9-16.8,33.4-11.4c11.9,5.2,17.9,18.1,14.9,30.3l3.1-1.2l1,2.7   c1-3.6,1.2-7.3,0.8-11c6.8-2.5,11.5-9,11.5-16.4c0-9.6-7.8-17.4-17.4-17.4c-2.1,0-4.1,0.4-6.1,1.1l1.2-3.5l-3.4-1.4l-3.5,10.4   l10.2,3.4l1-3.7l-3.2-1l-0.1-0.2c1.3-0.4,2.6-0.6,3.9-0.6c7.1,0,12.9,5.8,12.9,12.9c0,5.2-3.1,9.8-7.8,11.8   c-2.3-8.7-8.4-16.4-17.3-20.3C44.4,17.8,27.3,23.9,19.9,38l-1.4-3.7L15,35.4l4,10.2L29,41.6z"/><path fill="#000000" d="M62.9,78.2c4.5-2.7,8.2-6.6,10.9-11.5l1.4,3.6l3.5-1.1l-4-10.2l-10,3.9l1.6,3.5l3.6-1.5c0,0,0,0.1-0.1,0.1   c0,0,0,0,0,0c-0.1,0.2-0.3,0.4-0.4,0.7c0,0,0,0.1-0.1,0.1c-0.1,0.2-0.3,0.4-0.4,0.7c0,0-0.1,0.1-0.1,0.1c-0.1,0.2-0.3,0.4-0.4,0.6   c0,0,0,0,0,0.1c-0.1,0.2-0.3,0.4-0.4,0.6c0,0,0,0.1-0.1,0.1c-0.2,0.2-0.3,0.4-0.5,0.6c0,0-0.1,0.1-0.1,0.1   c-0.2,0.2-0.3,0.4-0.5,0.6c0,0,0,0-0.1,0.1c-0.2,0.2-0.3,0.4-0.5,0.6c0,0,0,0-0.1,0.1c-0.2,0.2-0.4,0.4-0.5,0.6   c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.5c0,0,0,0-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.5c0,0,0,0,0,0c-0.2,0.2-0.4,0.3-0.6,0.5   c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.5c0,0-0.1,0-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.5c0,0,0,0,0,0c-0.2,0.2-0.4,0.3-0.7,0.4   c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.3-0.6,0.4c0,0-0.1,0-0.1,0.1c-0.5,0.3-0.9,0.5-1.4,0.8c0,0-0.1,0-0.1,0   c-0.2,0.1-0.5,0.2-0.7,0.4c0,0-0.1,0-0.1,0c-0.5,0.2-1,0.5-1.5,0.7c0,0,0,0-0.1,0c-0.2,0.1-0.5,0.2-0.7,0.3c0,0-0.1,0-0.1,0   c-0.5,0.2-1,0.4-1.5,0.5c0,0,0,0,0,0c-0.3,0.1-0.5,0.1-0.8,0.2c0,0-0.1,0-0.1,0c-0.3,0.1-0.5,0.1-0.8,0.2c0,0,0,0,0,0   c-0.3,0.1-0.5,0.1-0.8,0.2c0,0,0,0,0,0c-0.3,0.1-0.5,0.1-0.8,0.1c0,0-0.1,0-0.1,0c-0.3,0-0.5,0.1-0.8,0.1c0,0,0,0,0,0   c-0.3,0-0.6,0.1-0.8,0.1c0,0,0,0,0,0c0,0-3.3,0-5.1,0H31H4.8v2.2v2.2h41.2h3.9c3-0.2,6.1-1,8.9-2.2c1.5-0.6,2.9-1.4,4.2-2.2H62.9z"/><path fill="#000000" d="M45.9,82.7C45.3,82.7,46.6,82.7,45.9,82.7L45.9,82.7z"></path></svg>
                            <img src ={process.env.PUBLIC_URL + './images/git.png'} alt="gitPicture" className="git-logo mb-1"></img>
                            <img src ={process.env.PUBLIC_URL + './images/mdb.png'} alt="gitPicture" className="git-logo ml-3 mb-1"></img>
                          </CardFooter>
                          </Card>
                        </a>

                          </Col>
                            <Col lg="4" md="6">
                              <a href="http://matthieupetit.net/Un_mome_a_Paris/" target="_blank">
                                <Card className="card-custom ml-4 mr-4 mb-4">
                                  <CardImg src ={process.env.PUBLIC_URL + './images/momeTest.jpeg'} alt="project picture" className="project_picture"/>
                                  <CardBody className="card-body-custom pb-1">
                                    <CardTitle>UN MOME A PARIS</CardTitle>
                                      <CardSubtitle className="custom-subtitle mb-2">Blog photo sur Paris</CardSubtitle>
                                      <CardText className="custom-cardText mt-3"><img src ={process.env.PUBLIC_URL + './images/sandglass-512.png'} alt="time-Picture" className="time-logo mb-1 mr-2"></img> 6 jours <img src ={process.env.PUBLIC_URL + './images/team3.png'} alt="time-Picture" className="team-logo ml-4 mb-1 mr-2"></img>4</CardText>
                                        <div>
                                          <hr></hr>
                                        </div>
                                  </CardBody>
                                  <CardFooter className="card-footer-custom pt-3 pb-3"> 
                                    <svg className="picto-card-custom pb-1 pl-3 mr-2" viewBox="0 0 128 128">
                                    <path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"></path></svg>
                                    <svg className="picto-card-custom pb-1 pl-3 mr-2" viewBox="0 0 128 128">
                                    <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>
                                    <svg className="picto-card-custom pb-1 pl-3 mr-2" viewBox="0 0 128 128">
                                    <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>
                                    <img src ={process.env.PUBLIC_URL + './images/git.png'} alt="gitPicture" className="git-logo ml-3 mb-1"></img>
                                  </CardFooter>
                                </Card>
                              </a>

                            </Col>
                              <Col lg="4" md="6">
                                <a href="https://antoinenourris.fr/NantesHorrorStory/" target="_blank">
                                  <Card className="card-custom ml-4 mr-4 mb-4">
                                  <CardImg src ={process.env.PUBLIC_URL + './images/horrorTest2.jpeg'} alt="project picture" className="project_picture"/>
                                  <CardBody className="card-body-custom pb-1">
                                          <CardTitle>NANTES HORROR STORY</CardTitle>
                                          <CardSubtitle className="custom-subtitle mb-2">Jeux video</CardSubtitle>
                                          <CardText className="custom-cardText mt-3"><img src ={process.env.PUBLIC_URL + './images/sandglass-512.png'} alt="time-Picture" className="time-logo mb-1 mr-2"></img> 24h <img src ={process.env.PUBLIC_URL + './images/team3.png'} alt="time-Picture" className="team-logo ml-4 mb-1 mr-2"></img>8</CardText>
                                          <div>
                                            <hr></hr>
                                          </div>
                                        </CardBody>
                                        <CardFooter className="card-footer-custom pt-1 pb-3"> 
                                          <svg className="picto-card-custom ml-2" viewBox="0 0 128 128">
                                          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>
                                          <svg className="picto-card-custom pb-1 pl-3" viewBox="0 0 128 128">
                                          <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>
                                          <svg className="picto-card-custom pb-1 pl-3" viewBox="0 0 128 128">
                                          <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>
                                          <img src ={process.env.PUBLIC_URL + './images/phaser.png'} alt="gitPicture" className="git-logo ml-3 mb-1"></img>
                                        </CardFooter>
                                      </Card>
                                    </a>
                                </Col>
                            </Row>
                          </Container>
                        </div>
                      </ScrollableAnchor>
        );
    }
}

export default Portfolio;