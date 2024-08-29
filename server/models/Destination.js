const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name:{type:String,
        required:true
    },
    description: { type: String,
        required: true
     },
    location: { type: String, 
        required: true 
    },
    popular: { type: Boolean, 
        default: false 
    },
});

module.exports = mongoose.model(
    "Destination", //file name
    destinationSchema//funtion name
)