const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registration = new Schema({
    _id : {
        type : String,
        required : 'Id is required'
    },
    address : {
        street : { type : String},
        area : {type : String},
        city : { type : String },
        pincode : { type : Number},
        state : { type : String},
        geo : {
            lat : { type : Number},
            log : {type : Number}
        },
        country : {type : String} 
    },
    no_of_rooms : {
        type : Number,
        required : 'no. of rooms required'
    },
    floor_no : {
        type : Number,
        required : 'floor no. is required'
    },
    total_floor_size : {
        type : Number,
        required : 'floor size is required'
    },
    rent : {
        type : Number,
        required : 'room rent is required'
    },
    deposite : {
        type : Number,
        default : 0 
    },
    image : {
        type : String,
        required : 'image is required'
    } 
})

const Registration = mongoose.model('Registration',registration);
module.exports = Registration;