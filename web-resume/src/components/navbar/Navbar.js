import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    render () {
        return (
           <div>
            <header className="navbar custom-navbar navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="logo">
                           <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <a href="index.html">Rx.</a> 
                        </div>
                    </div>

                    <div className="col-md-9 col-sm-8 col-xs-12">
                       <nav className="main-menu">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a className="smoth-scroll theme-color" href="#home">Home</a></li>
                                <li><a className="smoth-scroll" href="#about">About</a></li>
                                <li><a className="smoth-scroll" href="#services">service</a></li>
                                <li><a className="smoth-scroll" href="#work">work</a></li>
                                <li><a className="smoth-scroll" href="#contact">contact</a></li>
                                <li><a className="smoth-scroll" href="blog.html">blog</a></li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </div>
        );
    }
}


export default Navbar;