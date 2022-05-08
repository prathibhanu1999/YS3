const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({



    topic:{

        type:String,

        required:true

    },

    description:{

        type:String,

        required:true

    },

    name:{

        type:String,

        required:true

    },

    nic:{

        type:String,

        required:true

    },

    phonenumber:{

        type:String,

        required:true

    },

    numberofguest:{

        type:String,

        required:true

    },

    bookdate:{

        type:String,

        required:true

    }

});



module.exports = mongoose.model('eventOrders',postSchema);