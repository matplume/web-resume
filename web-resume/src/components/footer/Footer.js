import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render () {
        return (
            <footer class="footer">
            <div className="container">
                <div className="row wow zoomIn" data-wow-delay="0.4s">
                    <div class="col-md-12 text-center">
                        <ul className="social-link">
                            <li><a target="blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a target="blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                            <li><a target="blank" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin"></i></a></li>
                            <li><a target="blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <p>&copy;2018 <strong>Matthieu Petit</strong>. All Rights Reserved</p>
                    </div>
                </div>
            </div>
            </footer>
            );
        }
    }
    
    
    export default Footer;