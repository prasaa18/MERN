//zod input validation

const express= require("express");
const zod= require("zod");
const app= express();

const schema= zod.array(zod.number());  // input array number validation

//  const schema1= zod.object({
//        email: zod.string().email(),
//        password:z.string().min(8),
//        country:z.literal("IN").or(z.literal("US")),
//        kidneys:z.array(z.number())
//  })

//whatewre they can send user input thats why usee input validation
app.use(express.json()); 


app.post("/health-checkup", function(req,res){
    
    const kidneys=req.body.kidneys;   // { "kidenys":[1,2,3]}
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:" input not valid "
        })
    }else{
        res.send({
            response                                
    
        });
    }
    
});

app.listen(3000);

//o/p   //     "response": {
//         "success": true,
//         "data": [
//             1,
//             2
//         ]
//     }
// }



///  object with uemail and pasword
function validateInput(obj){
    const schema= zod.object({
        email:zod.string().email,
        password:zod.string().min(8)
    })
    const respose= schema.safeParse(obj)
}

// validateInput({
//     email:"p@gmail.com",
//     password:"diidoiodododo"
// })
app.use (express.json())

app.post("/login", function(req,res){
    const respose=validateInput(req.body)
    if(!respose.success){
        res.json({
            msg:"inavliid"
        })
        return;
    }
})