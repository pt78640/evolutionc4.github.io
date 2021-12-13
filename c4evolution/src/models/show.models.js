const mongoose=require('mongoose');
const movie=require('../models/movie.models');
const screen=require('../models/screen.models')
const showSchema=new mongoose.Schema({
    timing:{type:String,required:true},
    movies:{type:mongoose.Schema.Types.ObjectId,
        ref:"movie",
    required:true },
    total_seats:{type:Number,required:true},
    screens:{type:mongoose.Schema.Types.ObjectId,
        ref:"screen",
    required:true },

},
{
    versionKey:false
});
const show=mongoose.model("show",showSchema);
module.exports=show;