import React, { Component } from 'react';
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Food Items</h4>
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

                <div style={{paddingLeft:'35px'}}>
                <h1 style={{ color:'black', letterSpacing:'10px', fontSize:'64px'}}><b>Food Items<br/> Management</b></h1>
                <div style={{color:'black', letterSpacing:'15px', fontSize:'20px'}}>SELECT ONE OPTION</div>
                </div>

               
                {/* <button type="button" class="btn btn-primary btn-lg">Large button</button>
                <button type="button" class="btn btn-primary btn-lg">Large button</button> */}
                {/* <div class="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
                </div> */}

               
                <br/><br/>
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <h3>Add Food </h3>
                    <p>Fill the following form and submit to Add a Food<br/></p>
                   
                    <button class="btn btn-primary btn-lg"><a href="/addmeal" style={{textDecoration:'none',color:'white'}}><i class="fas fa-hamburger"></i>&nbsp;Add Food</a></button>
                    </div>
                    <div class="col-sm-4">
                    <h3>Available Food Details</h3>
                    <p>Full details of available Foods.                       </p>
                   
                    <button class="btn btn-primary btn-lg"><a href="/mealhome" style={{textDecoration:'none',color:'white'}}><i class="fas fa-edit"></i>&nbsp;Edit Food</a></button>
                    </div>
                    <div class="col-sm-4">
                    <h3>Received Orders</h3>        
                    <p>Full detailed list of orders which customers have made.</p>
                   
                    <button class="btn btn-primary btn-lg"><a href="/mealorders" style={{textDecoration:'none',color:'white'}}><i class="fas fa-clipboard-list"></i>&nbsp;Orders</a></button>
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