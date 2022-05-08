import React,{ Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'



export default class EventHome extends Component{
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
  axios.get("/eventposts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts);
    }
  });
}

onDelete = (id)=>{

  swal({
    title: "Are you sure?",
    text: "Once deleted",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
          axios.delete(`/eventpost/delete/${id}`).then((res) =>{
          swal("Halls Booking details deleted successfully!", {
            icon: "success",
          })
          this.retrievePosts()
          });
        } else {
          swal("Halls Booking details deleted successfully!");
        }
        this.retrievePosts();
    })
}

filterData(posts,searchKey){
  const result =posts.filter((post) => 
  post.topic.toLowerCase().includes(searchKey)||
  post.description.toLowerCase().includes(searchKey)||
  post.postCategory.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})
}

handleSearchArea=(e) =>{

  const searchKey =e.currentTarget.value;

  axios.get("/eventposts").then(res =>{
    if(res.data.success){
     this.filterData(res.data.existingPosts,searchKey)
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Halls</h4>
                <hr/>
                </div>

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Available Halls</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search Hall "
            name="searchQuery"
            onChange={this.handleSearchArea}></input>
          </div>
        </div>


        
        <table className="table">
        <thead>
        <tr>
          <th scope ="col">No</th>
          <th scope ="col">Halls</th>
          <th scope ="col">Description</th>
          <th scope ="col">Prices RS/=</th>
          <th scope ="col">Action</th>
          
        
        </tr>

        </thead>
      <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope ="row">{index+1}</th>
                <td>
                    <a href={`/eventpost/${posts._id}`} style={{textDecoration:'none'}}> 
                    {posts.topic}
                    </a>
                    </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href={`/eventedit/${posts._id}`}>
                    <i className= "fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className= "far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>      
        </table>
        
              &nbsp;

        
        
 
        </MDBCol>
        </MDBRow>


      </div>
    )
  }
}