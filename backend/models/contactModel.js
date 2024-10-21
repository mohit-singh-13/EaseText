// import mongoose
const mongoose = require("mongoose");

require('dotenv').config();

// define schema

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    number: {
        type:String,
        required:true,
        
    },
    email: {
        type:String,
        required:true,
       
    },
    message: {
        type:String,
        required:true,
        }
});

// export this model
module.exports = mongoose.model("ContactDB",contactSchema);