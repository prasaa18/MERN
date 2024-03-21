const express = require("express");
const jwt = require("jsonwebtoken");
const mongooose=require("mongoose");
const jwtPassword = "123456";
const app = express();

app.use(express.json());

mongooose.connect(
    "mongodb+srv://admin:admin@cluster0.hs3mybp.mongodb.net/usernewapp"
)

// const ALL_USERS = [
//     {
//         username: "Harkirat@gmail.com",
//         password: "123",
//         name: "harirat"
//     },
//     {
//         username: "raman@gmail.com",
//         password: "123",
//         name: "rat"
//     },
// ]

const User= mongooose.model("Users",{
    username:String,
    email:String,
    password:String,
});

 
function userExist(username, password) {
    const userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExist = true;
        }
    }
    return userExist;

}

app.post("/signn", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: "username doesn't exist in  db",
        })

    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    })
});

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email= req.body.email;

   const user=new User({
    username:username,
    email:email,
    password:password
   })

  const existUser= await User.findOne({ email:email});
    var token = jwt.sign({ username: username }, jwtPassword);
    if(existUser){
        return res.status(400).json({
            msg: "username exist in db",
        })
    }
    
    user.save();
    return res.json({
        token,
    })

});
 
app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
    return res.json({
        users:ALL_USERS.filter(function(value){
            if(value.username ==username){
                return false;
            }else{
                return true; 
            }
        })
    })
})

app.listen(3000);