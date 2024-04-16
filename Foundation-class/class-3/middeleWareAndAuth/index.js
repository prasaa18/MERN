// const express= require("express");
// const app= express()
// app.get("health-checkup",function(req,res){
//     const username= req.headers.username;
//     const password=re.headers.password;

//     if(username=="harkirat" && password=="pass"){
//         //do something with kideny
//         res.json({
//             msg:"your kideny fine"
//         })
//     }
// });

// app.listen(3000);
 

let  a=[1, 2 , 2, 3];
function removeDupliacte(a){
    return a.filter((item, index)=>
       a.indexOf(item)== index) ;
    
       
    
}
console.log(a);