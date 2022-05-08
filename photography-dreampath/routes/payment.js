const payment_Schema = require('../models/PaymentModel');
const express = require('express');
const router = express.Router();

router.route('/addpayment').post((req, res, next)=>{  
         let payment = new payment_Schema({
           customerName: req.body.customerName,
           bookingId: req.body.bookingId,
           contactNo: req.body.contactNo,
           roomNumber: req.body.roomNumber,
           startDate: req.body.startDate,
           endDate: req.body.endDate,
           subPackagesCharges: req.body.subPackagesCharges,
           paymentMethod: req.body.paymentMethod,
           cardNumber: req.body.cardNumber,
           cvv: req.body.cvv,
           cardholder: req.body.cardholder,
           charges: req.body.charges,
           subTotal: req.body.subTotal,
           total: req.body.total,
           Expire: req.body.Expire
        })

        payment.save()
        .then(event =>{
            res.json({
                message:'payment Added'
            })
        }).catch(error=>{
            console.log(error);
            res.json({
                message:'payment Not Added'
            })
        })
});




router.route('/getAllPayments').get((req,res) => {
    payment_Schema.find()
    .then(payment_Schema => res.json(payment_Schema))
    .catch(err => res.status(400).json('Error: '+err));
});


router.route("/deletePayments/:id").delete(async (req, res) => {
        let id = req.params.id;
        payment_Schema.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send({status :"Payment Delted"});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with Deleting Data",error: err.message});
        });
});

module.exports = router;