const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    
photographer_name:{
    type:String,
    required:true
},

studio_address:{
    type:String,
    required:true
}, 

phonenumber:{
    type:String,
    required:true

},
experience:{
    type:String,
    required:true
},


    postCategory:{
        type:String,
        required:true
    },

    image:{
       type:String,
        required:true
    }

},

{
    timestamps:true

});

  

module.exports = mongoose.model('spaPosts',postSchema);