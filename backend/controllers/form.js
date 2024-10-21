// import contact form model or schema
const User = require("../models/contactModel");
const Auth = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
// handle contact form data
exports.handleContactForm = async(req,res)=>{
    try{
       
        // get data
        const { name,  number, email, message } = req.body;
        // create entry for user
        const user = await User.create({
            name,  number, email, message
        });
        return res.status(200).json({
            success:true,
            message:'Data submitted successfully',
        });
    }
     catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error in data submission",
        });
      }
}

// handle signup form data
exports.signup = async (req,res)=>{
    try{
        //get data
        const {name,email,password}=req.body;
        // check if user already exists
        const existingUser = await Auth.findOne({email});
        
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            }); 
        }

        // secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }
        // create entry for user
        const user = await Auth.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });
    }
    catch(error){
          console.error(error);
          return res.status(500).json({
            success:false,
            message:"User cannot be registered,please try again later",
          });
    }
}

// login route handler
exports.login = async (req,res)=>{
    try{
        // data fetch
        const {email,password} = req.body;
        // validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully",
            });
        }

        // check for registered user
        let user = await Auth.findOne({email});
        // if not a registered user
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered",
            });
        }
        const payload ={
            email:user.email,
            id:user.id,
        }

        // verify password and generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            // password match
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            // console.log(token);
            // console.log(email);
            user = user.toObject();

            user.token = token;
            user.password = undefined;

            console.log(token);

            const options ={
                expires:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }


            return res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',

            });
            

        }
        else{
            // password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}
