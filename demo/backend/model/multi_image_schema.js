const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const multipleimage = new Schema({
    _id : {
        type : String,
        required : 'Id is required'
    },
    image : {
        type :[],
        required : 'image is required',
        
    }
})

const MultipleImage = mongoose.model('MultipleImage',multipleimage);
module.exports = MultipleImage;