const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

customer_name:{
    type:String,
    required:true
},

nic:{
    type:String,
    required:true
}, 

mobile_no:{
    type:String,
    required:true

},
email:{
    type:String,
    required:true
},
bookdate:{
    type:String,
    required:true
},

postCategory:{

    type:String,
    required:true

},



});





module.exports = mongoose.model('spaOrders',postSchema);