import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

function CreatePackage() {

 /*   const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");*/
    const [photographer_name, setphotographer_name,] = useState("");
    const [studio_address, setstudio_address] = useState("");
    const [phonenumber, setphonenumber,] = useState("");
    const [experience, setexperience] = useState("");
    const [bookdate, setbookdate] = useState("");
    const [postCategory, setpostCategory] = useState("");
    const [imageSelected, setimageSelected] = useState("");
    const [imageErrorMsg, setimageErrorMsg] = useState(false);
    
    //const [email, setemail] = useState("");

    function createPost(e){
        e.preventDefault();
        setimageErrorMsg(false);
            if(!imageSelected){
                setimageErrorMsg(true);
                return;
            }
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "YetiImage");

        axios.post("https://api.cloudinary.com/v1_1/yetii/image/upload", formData).then((response)=>{
            const image = imageSelected.name;
            console.log(response.data.url)
           // const createost = {topic, description, postCategory, image:response.data.url}
            const createost = {photographer_name,studio_address,phonenumber,experience,bookdate, postCategory, image:response.data.url}

            axios.post("/spapost/save", createost).then(() =>{
                swal.fire({
                    title: "Success!",
                    text: "Adding Success!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/spahome";
                    }
                });
            }).catch((err)=>{
                console.log(err)
                swal.fire({  
                    title: "Error!",
                    text: "Adding Not Success",
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Photographer</h4>
                <hr/>
                </div>

            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal"><b><u>New Photographer</u></b></h1>
                <form className="needs-validation" noValidate onSubmit={createPost}>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Photographer Name  </b></label>
                        <input type="text"
                        className="form-control"
                        name="photographer_name"
                        placeholder="Enter Photographer Name"
                        onChange={(e) =>{
                           // setTopic(e.target.value);
                           setphotographer_name(e.target.value);
                        }}
                        required/>
                    </div>
                        
                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Studio Address</b></label>
                        <input type="text"
                        className="form-control"
                        name="studio_address"
                        placeholder="Enter the  Address"
                        onChange={(e) =>{
                           // setDescription(e.target.value);
                           setstudio_address(e.target.value);

                        }}
                        required/>
                    </div>

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Phone number</b></label>
                        <input type="number"
                        className="form-control"
                        name="phonenumber"
                        placeholder="Enter Mobile No"
                        onChange={(e) =>{
                           // setDescription(e.target.value);
                           setphonenumber(e.target.value);

                        }}
                        required/>
                    </div>

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Experience</b></label>
                        <input type="number"
                        className="form-control"
                        name="experience"
                        placeholder="Enter the years of experience"
                        onChange={(e) =>{
                           // setDescription(e.target.value);
                           setexperience(e.target.value);

                        }}
                        required/>
                    </div>

                    



                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Fees Rs/=</b></label>
                        <input type="number"
                        className="form-control"
                        name="postCategory"
                        placeholder="Enter Charges"
                        onChange={(e) =>{
                            setpostCategory(e.target.value);
                        }}
                        required/>
                    </div>

                    {/* <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}><b>Email</b></label>
                            <input type="email"
                            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) =>{
                                setemail(e.target.value);
                            }}/>
                        </div> */}

                    <div className="from-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Upload Image</b></label>
                        <input type="file"
                        className="form-control" id="customFile"
                        name="postCategory"
                        placeholder="Upload Image"
                        onChange={(e) =>{
                            setimageSelected(e.target.files[0]);
                        }}/>
                       {imageErrorMsg && <div style={{color:'red'}}>Please select an image</div>}
                    </div>
                        <center>
                    <button className="btn btn-outline-success" type="submit" style={{marginTop:'15px'}}>
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

export default CreatePackage;