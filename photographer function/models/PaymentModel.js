// Create payment model
const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    bookingId: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    subPackagesCharges: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
    ,
    cardNumber: {
        type: String
    }
    ,
    cvv: {
        type: String
    }
    ,
    cardholder: {
        type: String
    }
    ,
    charges: {
        type: String,
        required: true
    }
    ,
    subTotal: {
        type: String,
        required: true
    }
    ,
    total: {
        type: String,
        required: true
    }
    ,
    Expire: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;
