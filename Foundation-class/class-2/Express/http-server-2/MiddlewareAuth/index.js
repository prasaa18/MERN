const { json } = require("body-parser");
const express= require("express");
const app= express()

// app.get("/health-checkup",function(req,res){
//     const username= req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;

//     if(username !="harkirat" || password !="pass"){
//         //do something with kideny
//         res.status(400),json({
//             msg:"user doesn't exist"
//         });
//         return ;
//      }
//         if( kidneyId!=1 &&  kidneyId!=2){
//           res.status(400).json({
//             msg:"wrong Input"
//           })
        
//         return
//       }

//       res.json({
//         msg:"your heart is healthy"}) 
    
// });

// app.listen(3000);

// using  middleware        

function userMuidleware(req,res, next){

    // may be get username from query parametr or  header
    if(username!= "harkirat" && password!="pass"){
        res.status(403).json({
            msg:"input wrong"
        })
    }else{
        next();
    }
}; 
app.get("health-checkup" ,userMuidleware,function(req,res){
    res.send("your heart helathy");
}); 

// count number of request
let numberOfrequest=0; 
function calcuateRequest(req,res,next){
    numberOfrequest++;
    console.log(numberOfrequest);
}
//app.use(express.json())  
app.use(calcuateRequest);
app.post("/health-checkup",function(req,res){        // it actually uses middleware in that after the next control reaches to res.json
    res.json({
        msg:"hi there"
    })
})