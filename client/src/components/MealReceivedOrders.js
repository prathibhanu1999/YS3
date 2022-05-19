import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class ReceivedOrders extends Component {
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
  var col = ["No","Room No","Meal Name","Portions","Time","Price"];
  var rows = [];
  this.state.orders.map((orders,index) => {
    var temp = [
      ++index,
      orders.room,
      orders.topic,
      orders.qty,
      orders.time,
      orders.description
    ];
    rows.push(temp);
  });
  doc.autoTable(col,rows,{startY:10});
  doc.save("OrdersReport.pdf")
};

retreiveOrders(){
  axios.get("/mealorders").then(res =>{
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Food Items</h4>
                <hr/>
                </div>

      <div className="row">
      <div style={{paddingLeft:'17px'}}>
        <h1 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Received<br/>Orders</b></h1>
      </div><br/>
      </div>
      
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Hall Name</th>
             <th scope="col">Food</th>
             <th scope="col">Portions</th>
             <th scope="col">Time</th>
             <th scope="col">Price</th>
          </tr>
        </thead>
            <tbody>
              {this.state.orders.map((orders,index) =>(
                <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>{orders.room}</td>
                   <td>{orders.topic}</td>
                   <td>{orders.qty}</td>
                   <td>{orders.time}</td>
                   <td>{orders.description}</td>
                </tr>
              ))}
            </tbody>           
         
       </table>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
       <button class="btn btn-primary btn-lg" onClick={this.pdf}><i class="far fa-file-alt"></i>&nbsp;Generate Report</button> 
       </div>
       </MDBCol>
       </MDBRow>
       </div>
  )
}
}

export default ReceivedOrders;