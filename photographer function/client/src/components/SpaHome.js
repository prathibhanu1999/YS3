import React, { Component} from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            posts:[]
        };
    }



    componentDidMount(){
        this.retrievePosts();
    }

    retrievePosts(){
        axios.get("/spaposts").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });

                console.log(this.state.posts);
           }
        
    
        });
    }

    onDelete = (id) =>{
        
        axios.delete(`/spadelete/${id}`).then((res) =>{
        alert("Delete Successfully");
        this.retrievePosts();
        })
        }
       
        
        filterData(posts,searchKey){

            const result =posts.filter((post) => 
          
            post.photographer_name.toLowerCase().includes(searchKey)||
          
            post.experience.toLowerCase().includes(searchKey)||
          
            post.postCategory.toLowerCase().includes(searchKey)
          
            )
          
          
          
            this.setState({posts:result})
          
          }
          
          
          
          handleSearchArea=(e) =>{
          
          
          
            const searchKey =e.currentTarget.value;
          
          
          
            axios.get("/spaposts").then(res =>{
          
              if(res.data.success){
          
               this.filterData(res.data.existingPosts,searchKey)
          
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Photographer</h4>
                <hr/>
                </div>

            <div className="row">
                 <div className="col-lg-9 mt-2 mb-2">
                   <h4><b>Photographers Details</b></h4>
                  </div>
    
              <div className="col-lg-3 mt-2 mb-2">
                    <input
                    className="form-control"    
                type="search"
                placeholder="Search Photographer "    
                name="searchQuery"    
             onChange={this.handleSearchArea}></input>
                 </div>
                </div>

              <table className="table">
                <thead>
                  <tr>
                   <th scope="col">Photographer Id</th>
                   <th scope="col">Photographer Name</th>
                   <th scope="col">Studio Address</th>
                   <th scope="col">Phone number</th>
                   <th scope="col">Years of Experience</th>
                   <th scope="col">Price</th>
                   <th scope="col">Action</th>

            </tr>
        </thead>
        
        <tbody>
            
        {this.state.posts.map((posts,index) =>(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/spapost/${posts._id}`} style={{textDecoration:'none'}}>
                     {posts.photographer_name}
                    </a>
                    </td>
               
                <td>{posts.studio_address}</td>
                <td>{posts.phonenumber}</td>
                <td>{posts.experience}</td>
                <td>{posts.postCategory}</td>

               
                <td>
                    <a className="btn btn-warning" href={`/spaedit/${posts._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                </td>
                </tr>
                
        ))}
        </tbody>
               </table>

             <button className="btn btn-success"><a href="/spaadded" style={{textDecoration:'none',color:'white'}}>Added Photographers</a></button>
                </MDBCol>
                </MDBRow>
            </div>          
               )
           }
       
        }
