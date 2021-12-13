const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
    name:{type:String,required:true},
    actors:[{type:String, required:true}],
    languages:[{type:String, required:true}],
    directors:[{type:String, required:true}],
    poster_url:{type:String},
},
{
    versionKey:false
});
const Movie=mongoose.model("movie",movieSchema);
module.exports=Movie;