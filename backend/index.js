// server instantiate
const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 3000;
// cookie parser
const cookieParser = require("cookie-parser");
// middleware to parse json request body
app.use(cors());
app.use(cookieParser());
app.use(express.json());
//connect to the database
require("./config/database").connect();

// route import and mount
const user = require("./routes/contact");
app.use("/",user);
const person = require("./routes/auth");
app.use("/", person);
// activate server
app.listen(PORT,()=>{
    try{
        console.log(`Server is running on port ${PORT}`);
    }catch(err){
        console.log("Server issue");   
    }
   
    
});