import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';



class SpaReceivedOrders extends Component {
constructor(props){
  super(props); //maybe an error
  this.pdf=this.pdf.bind(this)

  this.state={
    orders:[]  //maybe an error
  };
}

componentDidMount(){
  this.retreiveOrders();
}
pdf=()=> {
  const doc = new jsPDF();
  var col = ["No","photographer_name","nic","mobile_number","email","bookdate"];
  var rows = [];
  this.state.orders.map((orders,index) => {
    var temp = [
      ++index,
      orders.customer_name,
      orders.nic,
      orders.mobile_no,
      orders.email,
      orders.bookdate

    ];
    rows.push(temp);
  });
  doc.autoTable(col,rows,{startY:10});
  doc.save("Photography Booking Report.pdf")
};

retreiveOrders(){
  axios.get("/spaorders").then(res =>{
    if(res.data.success){
      this.setState({
        orders:res.data.existingOrders
      });
      console.log(this.state.orders)
    }
  });
}

render(){
  return(

    <div>

<MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Photographer</h4>
                <hr/>
                </div>

      <div className="row">
      <div style={{paddingLeft:'17px'}}>
        <h3 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Received<br/>Orders</b></h3>
      </div><br/>
      </div>
      
       <table className="table">
         <thead>
           <tr>
            <th scope ="col">#</th>
             <th scope="col">Photographer Name</th>
             <th scope="col">Studio Address</th>          
             <th scope="col">phone Number</th>
             <th scope="col">Experience</th>
             <th scope="col">Book Date</th>
          </tr>
        </thead>
            <tbody>
              {this.state.orders.map((orders,index) =>(
                <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>
                       <a href={`/spaorders/${orders._id}`}style={{textDecoration:'none'}}>
                       {orders.topic}
                       </a>
                   </td>
                   <td>{orders.customer_name}</td>
                   <td>{orders.nic}</td>
                   <td>{ orders.mobile_no}</td>
                   <td>{orders.email}</td>
                   <td>{orders.bookdate}</td>

       
         </tr>
              ))}
            </tbody>   
            <div>
            <button className="btn btn-success" onClick={this.pdf}>Summery Report</button>
              </div>            
         
       </table> 
       </MDBCol>
       </MDBRow>
       </div>
  )
}
}

export default SpaReceivedOrders;
