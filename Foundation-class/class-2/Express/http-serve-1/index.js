//create an http server using express

const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const port =process.env.PORT||3000    //export PORT=3006

//middlewares

app.use(bodyParser.json());

app.post('/',(req,res)=>{
   console.log(req.body)
    res.send('hello world')
})


app.get('/',(req,res)=>{

    res.send('hello world')
})

app.get('/',(req,res)=>{

    res.json({
        name:"harkrit",
        age:21
    })
})

// app.listen(port);

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})   


app.post('/',(req,res)=>{
console.log(req.headers);
console.log(req.body);
    res.send({
        msg:"2+2=4"
    })
})   
