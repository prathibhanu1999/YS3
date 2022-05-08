import React, { Component} from "react";
import axios from "axios";
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js';

  export default class EventPostDetails extends Component{
    constructor(props){
      super(props);

      this.state={
        post:{}
      };
    }

    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/eventpost/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }

      });

    }

    render(){

      const{topic,description,postCategory,image} = this.state.post;
      
      return(

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

         <div style={{marginTop:'20px'}}>
         <h4>{topic}</h4>
         <hr/>

        <dl className="row">
          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">{description}</dd>

          <dt className="col-sm-3">Price</dt>
          <dd className="col-sm-9">
            {postCategory}
            </dd>

        </dl>
        <div>

                    <img src={image} class="card-img-top" style={{height:'300px', width:'300px', border:'4px solid #CAC9C9'}} alt="..." /> 

                </div>
            
         </div>
         </MDBCol>
         </MDBRow>
         </div>

         
      )
  }
}