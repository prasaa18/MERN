//write basic express boilerplatecode withexpress.json mmiddleware

const express= require("express");
const { createTodo } = require("./Type");
const { updateTodo } = require("./Type");
const { todo } = require("./db");
const cors =require("cors");

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))



app.post("/todo", async function(req,res){
      const createPayload =req.body;
      const parsedPayNody= createTodo.safeParse(createPayload);
      if(!parsedPayNody.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
      }
      //put it on mongodb
      await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
      })

      res.json({
        msg:"Todo created"
      })

})


app.get("/todos", async function(req,res){

  const todos=  await todo.find({});
  console.log(todos); //promise

  res.json({
    todos
  })
    
})


app.put("/completed", async function(req,res){
     const updatePayload=req.body;
     const parsedPayNody =updateTodo.safeParse(updatePayload);
     if(!parsedPayNody.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return;
     }

     await todo.update({
        _id:req.body.id
     },{
        completed:true
     })
     res.json({
        msg:"todo marked as completed"
     })

})

app.listen(3000);