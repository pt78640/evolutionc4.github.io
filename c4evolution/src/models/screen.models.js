const mongoose=require('mongoose');
const theatre=require('../models/theatres.models')
const theatreSchema=new mongoose.Schema({
    name:{type:String,required:true},
    thatre:{type:mongoose.Schema.Types.ObjectId,
            ref:"theatre",
            required:true},
  
},
{
    versionKey:false
});
const screen=mongoose.model("screen",theatreSchema);
module.exports=screen;