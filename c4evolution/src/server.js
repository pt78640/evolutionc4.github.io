const connect=require('./config/db');
const upload=require('./utils/photo');
const express=require('express');
const {register, login}=require('./controllers/user.controllers');
const movieController= require("./controllers/movie.controllers");
const showController= require("./controllers/show.controllers");
const theaterController= require("./controllers/theatre.controllers")
const screenController= require("./controllers/screen.controllers");
const app=express();
app.use(express.json());
app.use("/movies", movieController);
app.use("/shows",showController);
app.use("/theaters",theaterController);
app.use("/screens",screenController);
app.post('/user',upload.single('profile'),register);
app.post('/login',login);
const start=async()=>{
await connect();
app.listen(3000,()=>{
    console.log("Server is live on port 3000")
})
}
module.exports=start;