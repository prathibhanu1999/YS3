import React, { useState, useEffect } from 'react'
import './cart.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import { default as NumberFormat } from 'react-number-format';

function Cart() {

  const [customerName, setName] = useState("");
  const [bookingId, setBookId] = useState("");
  const [contactNo, setConactnumber] = useState("");
  const [roomNumber, setRoomName] = useState("");
  const [startDate, setstart] = useState("");
  const [endDate, setEnd] = useState("");
  const [subPackagesCharges, setSubPackages] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardholder, setHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCCV] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [charges, setCharges] = useState("");
  const [total, setTotal] = useState("");
  const [Expire, setExpire] = useState("");

  function pay(e){
       e.preventDefault();
       const addpayment ={customerName, bookingId, contactNo, roomNumber, startDate, endDate, subPackagesCharges, paymentMethod, cardNumber, cvv, cardholder, charges, subTotal, total, Expire}

        axios.post("http://localhost:9080/payment/addpayment",addpayment).then(() =>{

            Swal.fire({  
            title: "Success!",
            text: "Payment Adding Success!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/";
            }
        });
        }).catch((err)=>{

            Swal.fire({  
            title: "Error!",
            text: "Payment Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
      }

   
  const [telisValid, settelIsValid] = useState(false);
  const [telmessage, settelMessage] = useState('');
 
  const set_Conactnumber = (event) => {
    const tel = event;
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (pattern.test(tel.replace( /\s/g, ''))) {
          settelIsValid(true);
          settelMessage('Valid Telephone Number.');
    } else {
      settelIsValid(false);
      settelMessage('Please enter a valid Telephone Number.');
    }
    setConactnumber(event);
  };

  const [cardisValid, setcardIsValid] = useState(false);
  const [cardmessage, setcardMessage] = useState('');
 
  const set_CardNumber = (event) => {
    const card = event;
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (pattern.test(card.replace( /\s/g, ''))) {
          setcardIsValid(true);
          setcardMessage('Valid Card Number.');
    } else {
      setcardIsValid(false);
      setcardMessage('Please enter a valid Card Number.');
    }
    setCardNumber(card);
  };

  const [CCVisValid, setCCVIsValid] = useState(false);
  const [CCVmessage, setCCVMessage] = useState('');
 
  const set_CCV = (event) => {
    const CCV = event;
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (pattern.test(CCV.replace( /\s/g, ''))) {
          setCCVIsValid(true);
          setCCVMessage('Valid CCV.');
    } else {
      setCCVIsValid(false);
      setCCVMessage('Please enter a valid CCV.');
    }
    setCCV(CCV);
  };

  const [timeisValid, settimeIsValid] = useState(false);
  const [timemessage, settimeMessage] = useState('');
 
  const set_End = (event) => {
    const endTime = event;
    if (endTime > startDate) {
          settimeIsValid(true);
          setCCVMessage('End Date Is Valid.');
    } else {
      settimeIsValid(false);
      settimeMessage('Please enter a valid End Date.');
    }
    setEnd(endTime);
  };

  return (
    <div>
      {/* <header>
        <div className="logo">
          <h1>KandyHills</h1>
        </div>
        <nav>
          <a href="">Home</a>
          <a href="">Rooms</a>
          <a href="">Events</a>
          <a href="">Spa</a>
          <a href="">Taxi</a>
          <a href="">Liquor</a>
          <a href="">Meals</a>
          <a href="">My Account</a>
        </nav>
      </header> */}
      <MDBRow className="container-fluid mt-5">
        <MDBCol sm='6' className="shadow-0 mt-5 pt-5" style={{border:'none'}}>
            <img src='https://cms.nolobank.com/uploads/5c29e0073852417d8ce7c608e061313f.png' className='img-fluid shadow-0' alt='...' style={{backgroundAttachment:'fixed'}} />
        </MDBCol>
        <MDBCol sm='6'>
            <MDBCard className="bg-light">
            <MDBCardBody>
                <MDBCardTitle className='text-center h1 fw-bold text-danger text-decoration-underline mt-4'>DO PAYMENTS</MDBCardTitle>
                <MDBCardText>
                    <h4 className='mt-5'>Personal Details</h4>
                    <div className='ms-5 me-5'>
                        <div class="mb-3 mt-4">
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Customer Name</h5>
                            <input type="text" class="form-control-lg form-control" style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setName(e.target.value);
                            }}/>
                        </div>
                        <div class="mb-3 mt-4">
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Book Id</h5>
                            <input type="text" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setBookId(e.target.value);
                            }}/>
                        </div>
                        <div class="mb-3 mt-4">
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Contact No</h5>
                            <NumberFormat format="### ## ## ###" mask="_" class="form-control-lg form-control" style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                set_Conactnumber(e.target.value);
                            }}/>
                            <small   className={`telmessage ${telisValid ? 'success' : 'error'}`} >
                                {telmessage}
                            </small>
                        </div>
                    </div>
                   
                    <hr/>
                    <h4 className='mt-5'>Package Details</h4>
                    <div className='ms-5 me-5'>
                        <div class="mb-3 mt-4">
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Room Number</h5>
                            <input type="number" class="form-control-lg form-control" style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setRoomName(e.target.value);
                            }}/>
                        </div>
                       
                        <div class="mb-3 mt-4 row">
                          <div className='col'>
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Start</h5>
                            <input type="date" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                setstart(e.target.value);
                            }}/>
                          </div>
                          <div className='col'>
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">End</h5>
                            <input min={startDate} type="date" class="form-control-lg form-control "  style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                set_End(e.target.value);
                            }}/>
                            <small   className={`timemessage ${timeisValid ? 'success' : 'error'}`} >
                                {timemessage}
                            </small>
                          </div>
                        </div>
                        <div class="mb-3 mt-4">
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Sub Packages & Chargers</h5>
                            <input type="text" class="form-control-lg form-control" style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setSubPackages(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <hr/>
                    <h4 className='mt-5'>Payment Details</h4>
                    <div class="mb-3 mt-4 row me-5">
                          <div className='col p-5'>
                            <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Payment Method</h5>
                            <select class="form-select-lg form-select "  style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                setPaymentMethod(e.target.value);
                            }}>
                                <option value="visa">Visa</option>
                                <option value="Dinar Club">Dinar Club</option>
                                <option value="Master">Master</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Apple Pay">Apple Pay</option>
                            </select>
                            <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Card Holder</h5>
                                <input type="text" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                setHolder(e.target.value);
                            }}/>
                            </div>
                             <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Card Number</h5>
                                <NumberFormat format="#### #### #### ####" mask="_" class="form-control-lg form-control" style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                    set_CardNumber(e.target.value);
                                }}/>
                                <small   className={`cardmessage ${cardisValid ? 'success' : 'error'}`} >
                                    {cardmessage}
                                </small>
                            </div>
                             <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">CCV</h5>
                                <NumberFormat format="###" mask="_" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                    set_CCV(e.target.value);
                                }}/>
                                <small   className={`CCVmessage ${CCVisValid ? 'success' : 'error'}`} >
                                    {CCVmessage}
                                </small>
                            </div>
                            <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Expire Date</h5>
                                <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}} onChange={(e) =>{
                                    setExpire(e.target.value);
                                }}/>
                            </div>
                          </div>
                          <div className='col p-5 alert-success'>
                            <div class="mb-3 ">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Sub Total</h5>
                                <input type="number" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setSubTotal(e.target.value);
                            }}/>
                            </div>
                            <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Charges</h5>
                                <input type="number" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}}  onChange={(e) =>{
                                setCharges(e.target.value);
                            }}/>
                            </div>
                            <hr/>
                            <div class="mb-3 mt-4">
                                <h5 for="exampleFormControlInput1" style={{lineHeight:'12px'}} class="form-label">Total</h5>
                                <input type="number" class="form-control-lg form-control " style={{backgroundColor:'#e8e8e8'}}   onChange={(e) =>{
                                setTotal(e.target.value);
                            }}/>
                            </div>
                            <div class="mb-3 mt-4">
                               
                            </div>
                          </div>
                    </div>
                </MDBCardText>
                <div className='text-end'>
                   <MDBBtn href='#' color="dark" onClick={pay}>Pay</MDBBtn>
                </div>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
     </MDBRow>
    </div>
  );
}

export default Cart;
