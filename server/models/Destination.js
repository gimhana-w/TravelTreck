const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name:{type:String, require: true},
    description:{type: String, require: true},
    location: {type:String, require: true},
    image: {type: String},
    popular:{type:Boolean, default: false}
});

const Destination = mongoose.models('Destination',destinationSchema);

module.exports = Destination;