const express=require("express")
const app=express();

const users=[{
    name:"john",
    kidneys:[{
        healthy:false
        
    }]
}];

app.get("/",function(re,res){

    const johnKidneys=users[0].kidneys;
   const numberOfKidneys=johnKidneys.length;
    let numberOfHealthykidneys=0;

    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
             numberOfHealthykidneys =numberOfHealthykidneys+1;
        }
    }
    const numberOfUnhealthKidneys=numberOfKidneys-numberOfHealthykidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthykidneys,
        numberOfUnhealthKidneys
    })
})  

app.use(express.json());

app.post("/",function(req,res){
   
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done!"
    })

})
app.put("/", function(req,res){
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
//removing unhealthy kidney


function isatleastOneUnHealthyKidney(){
   
    let atleastOneUnehealthy =false;
    for(let i=0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
           atleastOneUnehealthy=true;
        }
    }
    return atleastOneUnehealthy;
}
app.delete("/",function(req,res){

    //u should return 411 
    //only if atleast one unhealthy kidney is there do this else will return 411
  if(isatleastOneUnHealthyKidney()){
    const newKidney=[];
    for(let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidney  // intialize with new array
    res.json({msg:"done"})

   }else{
    res.status(411).json({
        msg:"you have no bad kidneys"
    })
}
})

app.listen(3000);


const fs= require("fs");   // files/a.txt

app.get("/files/:fileName",function(req,res){
   const name= req.params.fileName;
    console.log(name);
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        });
    })
   
})