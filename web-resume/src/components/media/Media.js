import React, { Component } from 'react';
import './media.css';


class Media extends Component {
    render () {
        return (

<div>

<div className="welcome-area" data-stellar-background-ratio="0.6" image="http://image.noelshack.com/fichiers/2018/39/4/1538054967-labaule.jpg">
<div className="welcome-table">
   <div className="welcome-cell">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <div className="welcome-text">
                       <h1>I'm <span className="element"></span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adiping elit, sed diam nonummy nibh euismod tinunt ut laoreet dolore magna aliquam.</p>
                        <a href="#" className="btn welcome-btn">Download Resume</a>
                    </div>
                </div>
           </div>
        </div>
    </div>
</div>
</div>
</div>

);
}
}


export default Media;