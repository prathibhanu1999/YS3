import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

    function CreatePost() {

        const [topic, setTopic] = useState("");
        const [description, setDescription] = useState("");
        const [postCategory, setpostCategory] = useState("");
        const [imageSelected, setimageSelected] = useState("");
        const [imageErrorMsg, setimageErrorMsg] = useState(false);

        function createPost(e){
            e.preventDefault();
            setimageErrorMsg(false);
            if(!imageSelected){
                setimageErrorMsg(true);
                return;
            }
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "zjxjw2dz");

            axios.post("https://api.cloudinary.com/v1_1/kavindu123/image/upload", formData).then((response)=>{
                const image = imageSelected.name;
                console.log(response.data.url)
                const createost = {topic, description, postCategory, image:response.data.url}

            axios.post("/mealpost/save", createost).then(() =>{
                swal.fire({
                    title: "Success!",
                    text: "Food Adding Success!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/mealhome";
                    }
                });
                }).catch((err)=>{
                    console.log(err)
                    swal.fire({  
                        title: "Error!",
                        text: "Food Adding Not Success",
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Food Items</h4>
                <hr/>
                </div>
                    <div style={{paddingLeft:'17px'}}>
                        <h1 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Add New<br/>Food </b></h1>
                        <div style={{color:'black', letterSpacing:'7px', fontSize:'20px'}}>EVERY FIELD IS MANDATORY</div>
                    </div><br/>  
                        <form className="needs-validation container" onSubmit={createPost}>
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Food Name</label>
                                <input type="text"
                                className="form-control"
                                // required pattern="^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$"
                                name="topic"
                                placeholder="Enter Food Name"
                                onChange={(e) =>{
                                    setTopic(e.target.value);
                                }}
                                required/>
                            </div>

                            <div className="from-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Price</label>
                                <input type="number"
                                className="form-control"
                                name="description"
                                placeholder="Enter Price"
                                onChange={(e) =>{
                                    setDescription(e.target.value);
                                }}
                                required/>
                            </div>
                            <div className="from-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Includes</label>
                                <input type="text"
                                className="form-control"
                                name="postCategory"
                                placeholder="Enter Potion Includes"
                                onChange={(e) =>{
                                    setpostCategory(e.target.value);
                                }}
                                required/>
                            </div>

                            <div className="from-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Upload Image</label>
                                <input type="file"
                                className="form-control" id="customFile"
                                name="postCategory"
                                placeholder="Enter Potion Includes"
                                onChange={(e) =>{
                                    setimageSelected(e.target.files[0]);
                                }}/>
                                {imageErrorMsg && <div style={{color:'red'}}>Please select an image</div>}
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary btn-lg rounded-pill" type="submit" style={{marginTop:'15px'}}>
                                <i className="far fa-check-square"></i>
                                &nbsp; Save
                            </button></div><br/>
                        </form>
                        </MDBCol>
                        </MDBRow>
                </div>
            );
    };
export default CreatePost;