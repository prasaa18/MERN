const mongoose =require("mongoose");
const { boolean } = require("zod");

const todoschema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

mongooose.connect(
    "mongodb+srv://admin:admin@cluster0.hs3mybp.mongodb.net/todos"
)

const  todo=mongoose.model('todos',todoschema);


module.exports={
    todo
}