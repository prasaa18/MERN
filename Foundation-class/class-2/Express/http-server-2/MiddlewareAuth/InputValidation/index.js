const { json } = require("body-parser");
const express= require("express");
const app= express();
//whatewre they can send user input thats why usee input validation
app.use(express.json()); //  control reach here midelware extract body  thisbefore rotes

app.post("/health-checkup", function(req,res){
    
    const kidneys=req.body.kidneys;   // { "kidenys":[1,2,3]}
    const kidneyLength= kidneys.length;
    res.send("you have "+kidneyLength +"kidneys");
});
///global catches  h
// after routes

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with our server"
    })
})


app.listen(3000);