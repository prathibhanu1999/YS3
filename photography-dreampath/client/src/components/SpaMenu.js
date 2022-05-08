import React, { Component } from 'react';
//import './navMenu.css';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'


class Menu extends Component {
    render() {
        return (

            <div className="bgimg " >
            <MDBRow>
            <MDBCol sm="3">
            <NavAdmin/>
            </MDBCol>
            <MDBCol sm="9">
            <div style={{paddingTop:'3%'}}>
            <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Photographers</h4>
            <hr/>
            </div>

            <div style={{ 
                    backgroundImage: `url("https://www.linkpicture.com/q/dot-grid.png")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    //width: '100vw',
                    height: '90vh'
                  }}>
            <div className="bgimg " >
                <div style={{paddingLeft:'35px'}}>
                <h1 style={{ color:'black', letterSpacing:'4px', fontSize:'64px'}}><b>Our<br/> Photographers</b></h1>
                <div style={{color:'blue', letterSpacing:'13px', fontSize:'20px'}}>SELECT ONE OPTION</div>
                </div>

                
                {/* <button type="button" class="btn btn-primary btn-lg">Large button</button>
                <button type="button" class="btn btn-primary btn-lg">Large button</button> */}
                {/* <div class="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
                </div> */}

               
                <br/><br/>
                <div>
                <div class="row">
                    <div class="col-sm-4">
                    <center>
                    <h3><b>New Photographer</b></h3>
                    </center>
                    <center>
                    <p>To Add New Photographer for DreamPath</p>
                    </center>
                    <center>
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/spaadd" style={{textDecoration:'none',color:'white'}}> Add New Photographer</a></button>
                    </center>
                    </div>
                   
                    
                    <div class="col-sm-4">
                    <center>
                    <h3><b>Photographers Details</b></h3>        
                    <p>To Edit details</p>
                    </center>
                    <center>
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/spaHome" style={{textDecoration:'none',color:'white'}}>Update</a></button>
                    </center>
                    </div>
                    <div class="col-sm-4">
                    <center>
                    <h3><b>Generated Bill</b></h3>
                    <p>To View Details</p>
                    </center>
                    <center>
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/spaorders" style={{textDecoration:'none',color:'white'}}>Received Orders</a></button>
                    </center>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </MDBCol>
            </MDBRow>
            </div>
        );
    }
}

export default Menu;