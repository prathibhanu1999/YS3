import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js';
import './MealDetailVertical.css';

class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
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

<MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Food Items</h4>
                <hr/>
                </div>

            <div style={{marginTop:'20px'}}>
            <h4>{topic}</h4>

            <dl className="row">
            <div className="col-sm-5">
            <div className="text-center">
            <img src={image} class="card-img-top rounded-circle" style={{height:'200px', width:'200px', border:'4px solid #CAC9C9'}} alt="..."/>
            </div>
            </div>
            <div class="col-sm-1 vl"></div>
            <div className="col-sm-5">
            <div className="text-center">
                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-3">{description}</dd>

                <dt className="col-sm-3">Potion Includes</dt>
                <dd className="col-sm-3">
                    {postCategory}
                </dd></div>
                </div>
            </dl>
            </div>
            </MDBCol>
            </MDBRow>
            </div>
        );
    }
}

export default PostDetails;