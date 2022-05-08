import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import NavBar from './NavBar.js';
import Footer from './Footer';
import SmoothList from 'react-smooth-list';


import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SmoothList>
                <Carousel pause={false} fade={true} indicators={true} wrap={true}>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{ color:'white', letterSpacing:'5px', fontSize:'64px', fontFamily:'Lucida Handwriting'}}>Dream<i>Path</i></h1>
                    <p style={{ color:'white', letterSpacing:'5px', fontSize:'24px' , fontFamily:'Times New Roman'}}>A personal tropical sanctuary set within the heart of city</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Relax and feel peace in you</h3>
                    <p>Enjoy an extraordinary retreat with exclusive offers. Relax and refresh – a perfect family getaway</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Small town feel, big city fun.</h3>
                    <p>"We can breed endangered species in captivity but with nowhere wild to release them their days are probably numbered."</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image1}
                    alt="fourth slide"
                    />
                    <Carousel.Caption>
                    <h3>Relax and feel peace in you</h3>
                    <p>Enjoy an extraordinary retreat with exclusive offers. Relax and refresh – a perfect family getaway</p>
                    </Carousel.Caption>
                </Carousel.Item>

                    <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image4}
                    alt="fifth slide"
                    />
                    <Carousel.Caption>
                    <h3>The best value under the sun</h3>
                    <p>Come and stay with us to feel even better than at home. Enjoy unforgettable experiences in dream hotels</p>
                    </Carousel.Caption>
                </Carousel.Item>

                

                </Carousel>
                <br/><br/>

                <p><center>_______________________________Dream<i>Path</i>_______________________________</center></p>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"OUR GUESTS ENJOY THE BEST OF<br/>EVERYTHING"<br/>__________________________________</center></h2>
               
                <p style={{fontFamily:'Helvetica'}}><center>Plan an ideal staycation complete with complimentary, breakfast, spa or dining credits or even all-day access<br/> to Adventure Zone for the kids. We have everyone in the family's well-being in mind.</center></p>
                <br/><br/>

                <Container>
                <Row>
                   
                    
                </Row>
                <br/><br/><br/>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"UNFORGETTABLE EVENTS"<br/>__________________________________</center></h2>
               

                <Row>
                    <Col sm={6}>
                        <center>
                        <img
                            width={550}
                            height={300} 
                            // className="d-block w-100"
                            src={image7}
                            alt="fifth slide"
                        />
                        </center><br/>
                        <h4>Meetings & Events</h4>
                        <p style={{textAlign:'justify'}}>
                        Offers a range of flexible venues including the signature dreampath Ballroom,  that can cater to seated banquets for up to 250 guests.
                        </p>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/eventadded" style={{textDecoration:'none'}}>Learn more</a></button>

                    </Col>
                    <Col sm={6}>
                        <center>
                        <img
                            width={550}
                            height={300} 
                            // className="d-block w-100"
                            src={image8}
                            alt="fifth slide"
                        />
                        </center><br/>
                        <h4>Wedding</h4>
                        <p style={{textAlign:'justify'}}>The city’s sought-after location for weddings,</p>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/eventadded" style={{textDecoration:'none'}}>Learn more</a></button>
                    </Col>
                </Row>

                <br/><br/><br/>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"LUXURY HIGHLIGHTS"<br/>__________________________________</center></h2>
                <Row>
                
                    <Col sm>
                    <center>
                    <img
                            width={350}
                            height={350} 
                            // className="d-block w-100"
                            src={image6}
                        />

                        <h3>Food Items</h3>
                        <p>Comprising the very best of restaurants in<br/> Sri Lanka, dreampath offers grandeur extravagance & unparalleled dining experiences.</p>
                        <br/>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/mealsadded" style={{textDecoration:'none'}}>Find out more</a></button>

                    </center>
                    </Col>

                    <Col sm>
                    <center>

                    <img
                            width={350}
                            height={350} 
                            // className="d-block w-100"
                            src={image9}
                        />
                        <h3>Photography</h3>
                        <p>Set your soul free with a range of <br/></p><br/><br/>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/spaadded" style={{textDecoration:'none'}}>Find out more</a></button>

                   </center>
                    </Col>

                    <Col sm>
                    <center>
                    <img
                            width={350}
                            height={350} 
                            // className="d-block w-100"
                            src={image11}
                        />

                        <h3>Halls Details</h3>
                        <p>Now Available Halls 
                        </p>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/eventadded" style={{textDecoration:'none'}}>Learn more</a></button>

                   
                    </center>
                    </Col>
                </Row>

                </Container>

                <br/>
                
                </SmoothList>
                <Footer/>

            </div>
        );
    }
}

export default Dashboard;