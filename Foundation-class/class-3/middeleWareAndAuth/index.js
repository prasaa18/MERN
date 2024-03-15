const express= require("express");
const app= express()
app.get("health-checkup",function(req,res){
    const username= req.headers.username;
    const password=re.headers.password;

    if(username=="harkirat" && password=="pass"){
        //do something with kideny
        res.json({
            msg:"your kideny fine"
        })
    }
});

app.listen(3000);