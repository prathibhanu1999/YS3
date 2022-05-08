import React, { Component } from 'react';
import "./Footer.css";
import { Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="main-footer">
                <div className="container">
                    <div className="row">
                  
                    {/* Column2 */}
                    <Col sm={3} style={{fontFamily:'Garamond'}}>
                        <h4><b>About DreamPath</b></h4>
                        <ui className="list-unstyled">
                        <li>About Us</li>
                        <li>Wedding Plans</li>
                        <li>DreamPath Centers</li>
                        <li>Residences</li>
                        <li>Contact Us</li>
                        </ui>
                        
                    </Col>
                    <Col sm={1}>
                    <div class="vl"></div>
                    </Col>

                
                    
                  

                    {/* Column1 */}
                    <Col sm={4} style={{fontFamily:'Garamond'}}>
                        <center>
                        <h1><b>Address</b></h1>
                        <p>DreamPath Centers (N Ventures Co., Ltd.)<br/>
                            2 Samsen 2, Samsen Road, Pranakorn, Banglamphu<br/> Sri Lanka 10200<br/>
                            Tel. : +94 11 2 755 455 <br/>
                            E-mail : info@DreamPath.com</p><br/>
                      
                        </center>
                    </Col>


                    
                    
                    <Col sm={1}>
                    <div class="vl"></div>
                    </Col>

                    <Col sm={3} style={{fontFamily:'Garamond'}}>
                        
                        <h4><b>Find & Book</b></h4>
                        <ui className="list-unstyled">
                        <li>Our Destinations</li>
                        <li>Find a Reservation</li>
                        <li>Halls & Photographers</li>
                        <li>Ordered Items & Food Package</li>
                        </ui>
                    </Col>
                    


                    </div>

                    <div class="container text-center">
                        <a href="#"><i class="fa fa-facebook"></i></a> &nbsp; &nbsp;&nbsp;
                        <a href="#"><i class="fa fa-twitter"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="#"><i class="fa fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="#"><i class="fa fa-google-plus"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="#"><i class="fa fa-skype"></i></a>&nbsp;&nbsp;&nbsp;
                    </div>

                    <hr />
                    <div className="row">
                        <center>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} DreamPath | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                    </center>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Footer;