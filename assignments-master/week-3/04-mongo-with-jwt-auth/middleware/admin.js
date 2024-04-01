// Middleware for handling auth

const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../config");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token= req.headers.authorization;
    //bearer jswt
     
    const words= token.split(" ");

    const jwtToken = words[1];
    try{
        const jwtDecodedValue = jwt.verify(jwtToken,JWT_SECRET);

        // authenetication    
            if(jwtDecodedValue.username){  // save one db calll it checki liken inm memory nternally username is signed in or not
             
                next();
        
            }else{
                res.status(403).json({
                    msg:"you are not authinticated"
                })
            }
        
    }catch(e){
    res.json({
        msg:"incorrect input "
    })
    }
   
    

}

module.exports = adminMiddleware;