import React, { Component} from "react";
import axios from "axios";
import swal from 'sweetalert';
import NavBar from './NavBar.js';
import Footer from './Footer';

  export default class BookEvent extends Component{
    constructor(props){
      super(props);

      this.state={
        post:{},
        topic :"",
        description:"",
        name:"",
        nic:"",
        phonenumber:"",
        email:"",
        bookdate:"",

        



      };
    }

    handleInputChange = (e) =>{
      const {name,value} = e.target;
      this.setState({
          ...this.state,
          [name]:value

      })
  }

  onSubmit = (e) =>{

    e.preventDefault();

  
   const {photographer_name, studio_address, phonenumber, experience} = this.state.post;
   const {customer_name,nic, mobile_no, email, bookdate} = this.state;

    const data ={

      photographer_name:photographer_name,
      studio_address:studio_address,
       customer_name:customer_name,
       nic:nic, 
       mobile_no:mobile_no,
       email:email,
       bookdate:bookdate




    }



    console.log(data)



    axios.post("/spaorder/save",data).then((res) =>{
        if(res.data.success){
            swal("Done!", "Event Booked Successfully", "success")
            this.setState(
                {
                  
                    photographer_name: "", 
                    studio_address:"",
                    customer_name:"",
                    nic:"", 
                    mobile_no:"",
                    email:"",
                    bookdate:""
     
                    
                }
            )
        }
    })





}

    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/spapost/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }

      });

    }
    render() {

      const {photographer_name, studio_address, phonenumber, experience,postCategory,image,} = this.state.post;

      return (
        <div>
          <NavBar/>
          <div className="col-md-8 mt-4 mx-auto">
               <form className="needs-validation" onSubmit={this.onSubmit}>
                  <div class="row">
                      <div className="col-sm-6">
                          <div className="text-center">
                      <img src={image} class="card-img-top rounded-circle" style={{height:'200px', width:'200px', border:'4px solid #CAC9C9'}} alt="..." />
                      <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px'}}>{photographer_name}</h5>
                      </div><br/><br/>
                      <center>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{studio_address}</h5>
                      </div><br/>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{phonenumber}</h5>
                      </div><br/>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{experience}</h5>
                      </div><br/>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{postCategory}</h5>
                      </div>
                      </center>
                  </div>
                   <div className="col-sm-6">
                   <div className="from-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                       <label style={{marginBottom:'5px'}}>Customer Name</label>
                       <input type="text"
                       className="form-control"
                       name="name"
                       placeholder="Enter Name"
                       value={this.state.customer_name}
                      onChange={this.handleInputChange}
                      required/>
                   </div>

                   <div className="from-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                       <label style={{marginBottom:'5px'}}>NIC</label>
                       <input type="number"
                       className="form-control"
                       name="nic"
                       placeholder="Enter NIC"
                       value={this.state.nic}
                      onChange={this.handleInputChange}
                      required/>


                   </div>
                      <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>Phone Number:</label>
                          <input type="number"
                          className="form-control"
                          name="phonenumber"
                          placeholder="Enter Phone Number"
                          value={this.state.mobile_no}
                        onChange={this.handleInputChange}
                        required/>
                      </div>
                              <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>email:</label>
                          <input type="string"
                          pattern=".+@globex\.com" size="100" 
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                          value={this.state.numberofguest}
                        onChange={this.handleInputChange}
                        required/> 
                      </div>   
                      <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>Book Date:</label>
                          <input type="date"
                          className="form-control"
                          name="bookdate"
                          placeholder="DD / MM / YYYY"
                          value={this.state.bookdate}
                        onChange={this.handleInputChange}
                        required/>
                      </div>


                   </div><div className="d-grid gap-2 d-md-flex justify-content-md-end">
                   <button className="btn btn-primary btn-lg rounded-pill" type="submit" style={{marginTop:'15px', boxShadow:'5px 5px 5px grey'}}>
                   <a href="/payment" style={{textDecoration:'none',color:'white'}}>
                       &nbsp;Book</a>
                   </button></div>
                   </div>

               </form>
          </div>
          <Footer/>
          </div>
      );
  }
}