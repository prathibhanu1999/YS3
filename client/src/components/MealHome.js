import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

class Home extends Component {
constructor(props){
  super(props); //maybe an error

  this.state={
    posts:[]  //maybe an error
  };
}

componentDidMount(){
  this.retreivePosts();
}

retreivePosts(){
  axios.get("/mealposts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete = (id)=>{
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this Meal!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
          axios.delete(`/mealpost/delete/${id}`).then((res) =>{
          swal("Done! Your Meal has been deleted!", {
            icon: "success",
          })
          this.retreivePosts()
          });
        } else {
          swal("Your Meal is safe!");
        }
        this.retreivePosts();
    })
}

filterData(posts,searchKey){
    const result = posts.filter((post) =>
     post.topic.toLowerCase().includes(searchKey)||
     post.description.toLowerCase().includes(searchKey)||
     post.postCategory.toLowerCase().includes(searchKey)
    )

    this.setState({posts:result})
}

handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/mealposts").then(res =>{
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Food Delivery</h4>
                <hr/>
                </div>

      <div className="row">
      <div style={{paddingLeft:'17px'}} className="col-sm-9 mb-2">
        <h1 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Added<br/>Foods List</b></h1>
        <div style={{color:'black', letterSpacing:'7px', fontSize:'20px'}}>EDIT | DELETE</div>
      </div><br/>
        <div className="col-lg-3 mt-2 mb-2 col-sm-3">
          <input
          className="form-control"
          type="search"
          placeholder="Search by Name"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>
        </div>
      </div>
      
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Food Name</th>
             <th scope="col">Price</th>
             <th scope="col">Includes</th>
             <th scope="col">Action</th>
          </tr>
        </thead>
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>
                       <a href={`/meal/${posts._id}`}style={{textDecoration:'none'}}>
                       {posts.topic}
                       </a>
                   </td>
                   <td>Rs.{posts.description}/=</td>
                   <td>{posts.postCategory}</td>
                   <td>
                      <a className="btn btn-warning" href={`/editmeal/${posts._id}`}>
                       <i className="fas fa-edit"></i>&nbsp;Edit
                     </a>
                     &nbsp;
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                       <i className="fas fa-trash-alt"></i>&nbsp;Delete
                     </a>
                   </td>

                </tr>

              ))}

            </tbody>           
         
       </table> 

       <button className="btn btn-primary btn-lg rounded-pill"><a href="/addmeal" style={{textDecoration:'none',color:'white'}}>Add Foods</a></button>
    </MDBCol>
    </MDBRow>
    </div>
  )
}
}

export default Home;