import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import NavBar from './NavBar.js';
import Footer from './Footer';
import SmoothList from 'react-smooth-list';

class AddedMeals extends Component {

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
            console.log(res.data)
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts)
          }
        });
      }
      
      onDelete = (id)=>{
          axios.delete(`/mealpost/delete/${id}`).then((res) =>{
              alert("Deleted Successfully");
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

      render() {
        return (
<div>
    <NavBar/>
    <SmoothList>
    <div class="dashboard-main-wrapper">
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingLeft:'2%', width:'98%'}}>
                    {/* <div className=" fw-bold mt-2 border-0 h2 pl-2 pt-5 pb-4 text-center" style={{color:'black', letterSpacing:'3px', fontSize:'64px'}}>
                        Our Meals!
                    </div> */}
                <MDBRow  style={{marginTop:'1%'}} >
                    <MDBCol sm='12'>
                        <MDBRow className="p-3">
                            {this.state.posts.map((posts,index) => (
                                <MDBCol sm='4'>
                                    <div className="pb-3">
                                        <MDBCard className="shadow-0 square border-5 border-light shadow-20 h-100 rounded-20px shadow p-3 mb-5 bg-white rounded" style={{borderRadius:'20px 20px 20px 20px'}}>
                                            <div className="text-center">
                                            <img src={posts.image} class="card-img-top rounded-circle" style={{height:'200px', width:'200px', border:'4px solid #CAC9C9'}} alt="..." />
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardText>
                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px'}}>{posts.topic}</h5>
                                                </MDBCardText>
                                            </MDBCardBody>
                                            <button className="btn btn-primary btn-lg" style={{boxShadow:'5px 5px 5px grey'}}>
                                                <a href={`/mealorder/${posts._id}`} style={{textDecoration:'none',color:'white'}}>
                                                <i className="fas fa-cash-register"></i>
                                                &nbsp; Order Now!
                                                </a>
                                            </button>
                                        </MDBCard>
                                    </div>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
      </div>
      </SmoothList>
      <Footer/>
</div>
        );
            }  
}

export default AddedMeals;