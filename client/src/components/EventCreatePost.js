import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

function EventCreatePost() {

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [postCategory, setpostCategory] = useState("");
    const [imageSelected, setimageSelected] = useState("");
    const [imageErrorMsg, setimageErrorMsg] = useState(false);

    function EventcreatePost(e){
        e.preventDefault();
        setimageErrorMsg(false);

            if(!imageSelected){

                setimageErrorMsg(true);

                return;

            }
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "sankalana");

        axios.post("https://api.cloudinary.com/v1_1/kasun/image/upload", formData).then((response)=>{
            const image = imageSelected.name;
            console.log(response.data.url)
            const createost = {topic, description, postCategory, image:response.data.url}

            axios.post("/eventpost/save", createost).then(() =>{
                swal.fire({
                    title: "Success!",
                    text: "Halls Booking  Adding Success!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/eventadd";
                    }
                });
            }).catch((err)=>{
                console.log(err)
                swal.fire({  
                    title: "Error!",
                    text: "Halls Booking Adding Not Success",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"})
            })
        })
    }

        return (

            <div>
                    <MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Hall</h4>
                <hr/>
                </div>

            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add New Hall</h1>
                <form className="needs-validation" onSubmit={EventcreatePost}>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Hall Name</label>
                        <input type="text"
                        className="form-control"
                        name="topic"
                        placeholder="Enter Hall Name"
                        onChange={(e) =>{
                            setTopic(e.target.value);
                        }}
                        required/>
                    </div>

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Description</label>
                        <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        onChange={(e) =>{
                            setDescription(e.target.value);
                        }}required
                        />
                    </div>

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Prices Rs/=</label>
                        <input type="number"
                        className="form-control"
                        name="postCategory"
                        placeholder="Enter Price"
                        onChange={(e) =>{
                            setpostCategory(e.target.value);
                        }}
                        />
                    </div>

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>upload Image</label>
                        <input type="file"
                        className="form-control" id="customFile"
                        name="postCategory"
                        placeholder="Upload Image"
                        onChange={(e) =>{
                            setimageSelected(e.target.files[0]);
                        }}
                        />
                        {imageErrorMsg && <div style={{color:'red'}}>Please select an image</div>}
                    </div>
                        <center>
                    <button className="btn btn-outline-primary" type="submit" style={{marginTop:'15px'}}>
                        <i className="far fa-check-square"></i>
                    
                        &nbsp; Save
                     
                    </button>
                    </center>
                </form>
        </div>
        </MDBCol>
        </MDBRow>
        </div>

        );
                    };

export default EventCreatePost;