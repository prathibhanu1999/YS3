import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

class EventEditPost extends Component {

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
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
        const id = this.props.match.params.id;

        const {topic,description,postCategory} = this.state;

        const data ={
            topic:topic,
            description:description,
            postCategory:postCategory
        }

        console.log(data)

        axios.put(`/eventpost/update/${id}`,data).then((res) =>{
            if(res.data.success){
                swal("Done!", "Halls Booking Updated Successfully", "success")
                this.setState(
                    {
                        topic:"",
                        description:"",
                        postCategory:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        
        const id = this.props.match.params.id;
        
        axios.get(`/eventpost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    topic:res.data.post.topic,
                    description:res.data.post.description,
                    postCategory:res.data.post.postCategory
                });
                console.log(this.state.post);
            }
        });
    }

    render() {
        return (

            <div>

<MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Halls</h4>
                <hr/>
                </div>

            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Halls Details</h1>
                 <form className="needs-validation" noValidate>
                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Hall Name</label>
                         <input type="text"
                         className="form-control"
                         name="topic"
                         placeholder="Enter Hall Name"
                         value={this.state.topic}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Description</label>
                         <input type="text"
                         className="form-control"
                         name="description"
                         placeholder="Enter short description"
                         value={this.state.description}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Enter Price</label>
                         <input type="text"
                         className="form-control"
                         name="postCategory"
                         placeholder="Enter Details"
                         value={this.state.postCategory}
                         onChange={this.handleInputChange}/>
                     </div>

                     <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                         <i className="far fa-check-square"></i>
                         &nbsp; Update
                     </button>
                 </form>
            </div>
            </MDBCol>
            </MDBRow>
            </div>
        );
    }
}

export default EventEditPost;