import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from './adminNav'
function Index() {
    
    return (
    <div>
    <div class="dashboard-main-wrapper App">
        <div class="dashboard-wrapper">
                <MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
            <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard</h4>
                <hr/>
            </div>
                 <MDBRow  style={{marginTop:'0'}}>
                    {/* <MDBCol sm='4'>
                        <a href="staffmenu" className="text-decoration-none">
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-user-friends" /><br/> <span>Staff</span>
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol> */}
                    <MDBRow  style={{marginTop:'1%'}}>
                    <MDBCol sm='4'>
                          <a href="mealmenu" className="text-decoration-none">
                            <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                                <MDBIcon fas icon="fas fa-utensils" /> <br/> Food Items
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol>
                   
                    
                    {/* <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                           <a href="rentmenu" className="text-decoration-none">
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-car" /> <br/>Rent
                            </MDBCardHeader>
                           </a>
                        </MDBCard>
                    </MDBCol> */}
                     {/* <MDBRow  style={{marginTop:'1%'}}> */}
                    <MDBCol sm='4'>
                        <a href="eventmenu" className="text-decoration-none">
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-map-marker-alt" /> <br/>Halls
            
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                    {/* </MDBRow> */}
                    <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <a href="spamenu" className="text-decoration-none">
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-camera"/> <br/>Photography
                            </MDBCardHeader>
                            </a>
                        </MDBCard>
                    </MDBCol>
                    </MDBRow>
                     </MDBRow>
                    <MDBRow  style={{marginTop:'1%'}} class="d-flex justify-content-center">
                     {/* <MDBCol sm='4'>
                        <a href="StaffDashboard" className="text-decoration-none">
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-beer" /> <br/>Liquour
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol> */}
                   &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                             <a href="payment" className="text-decoration-none">
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="fas fa-file-invoice-dollar" /> <br/>Payment
                            </MDBCardHeader>
                            </a>
                        </MDBCard>
                    </MDBCol> */}
                    {/* <MDBCol sm='4'>
                         <a href="roommenu" className="text-decoration-none">
                            <MDBCard className=" square border-bottom border-5 border-blue bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                                <MDBIcon fas icon="fas fa-bed" /> <br/> <span>Room</span>
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol> */}
                 </MDBRow>
                 </MDBCol>
                 </MDBRow>
                
            {/* </div> */}
        </div>
      </div>
    </div>
      )
};


export default Index;