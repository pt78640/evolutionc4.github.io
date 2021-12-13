const User=require('../models/user.models');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const newToken=(user)=>{
    return jwt.sign({user:user}, process.env.JWT_KEY);
}
const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        if(user){
            res.status(400).json({error:"email already exist"});
        }
        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_photo_url:req.file.path,
            role:req.body.role
        });
        const token=newToken(user);
        res.status(201).json({user,token});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
const login=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email}); 
        if(!user){
            res.status(401).json({error:"User not registered"})
        }
        const match=await user.checkPassword(req.body.password);
        if(!match){
            res.status(401).json({error:"Please provide valid email and password"})
        }
        token=newToken(user);
        res.status(200).json({user,token})
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}
module.exports={register,login,newToken};