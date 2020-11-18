const jwt = require("jsonwebtoken");
const config = require("config");
var nodemailer = require('nodemailer');
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
var crypto = require('crypto');
const UserServices = require('../services/user.services');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'malikskad@gmail.com',
      pass: 'malikAdmin123443'
    }
  });


  exports.registerUser = async (req,res) => {

    const user = await UserServices.getUserByEmail({email:req.body.email});

    if(!user) { 
        return res.status(409).json({
            error:"User already exists "
        }); 
    }

    user = await UserServices.create(req.body);
    

    res.status(201).json({
        message: "User Created Success",
        name: user.name,
        email: user.email
    });

};

exports.signinUser = async (req,res)=>{

  
  };

exports.book = async (req,res) => {

};

exports.updateProfile = async (req,res) => {

};

exports.forgetPassword = async (req,res) => {

};