import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import NavBar from './NavBar.js';
import Footer from './Footer';

class MakeOrder extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{},
            room:"",
            time:"",
            qty:""
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

        const {topic,description} = this.state.post;
        const {room,time,qty} = this.state;

        const data ={
            topic:topic,
            description:description,
            room:room,
            time:time,
            qty:qty
        }

        console.log(data)

        axios.post("/mealorder/save",data).then((res) =>{
            if(res.data.success){
                swal("Done!", "Food Added Successfully", "success")
                this.setState(
                    {
                        topic:"",
                        description:"",
                        room:"",
                        time:"",
                        qty:""
                    }
                )
            }
        })
    

    }
    componentDidMount(){
        
        const id = this.props.match.params.id;
        
        axios.get(`/mealpost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render() {

        const {topic,description,postCategory,image} = this.state.post;

        return (
            <div>
                <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                 <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div class="row">
                        <div className="col-sm-6">
                            <div className="text-center">
                        <img src={image} class="card-img-top rounded-circle" style={{height:'200px', width:'200px', border:'4px solid #CAC9C9'}} alt="..." />
                        <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px'}}>{topic}</h5>
                        </div><br/><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Price : Rs.{description}/=</h5>
                        </div><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Includes : {postCategory}</h5>
                        </div>
                    </div>
                     <div className="col-sm-6">
                     <div className="from-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                         <label style={{marginBottom:'5px'}}>Enter Your Hall Name. :</label>
                         <input type="text"
                         className="form-control"
                         name="room"
                         placeholder="Type here"
                         value={this.state.room}
                         onChange={this.handleInputChange}
                         required/>
                     </div>

                     <div className="from-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                         <label style={{marginBottom:'5px'}}>Time :</label>
                         <input type="time"
                         className="form-control"
                         name="time"
                         placeholder="Type here...(Ex : 8.00 am)"
                         value={this.state.time}
                         onChange={this.handleInputChange}
                         required/>
                     </div>
                        <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                            <label style={{marginBottom:'5px'}}>Enter the No. Of Portions Needed :</label>
                            <input type="number"
                            min="1"
                            className="form-control"
                            name="qty"
                            placeholder="No. of portions...(Ex : 1)"
                            value={this.state.qty}
                         onChange={this.handleInputChange}
                         required/>
                        </div>
                     </div><div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-primary btn-lg rounded-pill" type="submit" style={{marginTop:'15px', boxShadow:'5px 5px 5px grey'}}>
                         <i className="fab fa-opencart"></i>
                         <a href="/payment" style={{textDecoration:'none',color:'white'}}>
                         &nbsp; Order</a>
                     </button></div>
                     </div>

                 </form>
            </div><br/>
            <Footer/>
            </div>
        );
    }
}

export default MakeOrder;