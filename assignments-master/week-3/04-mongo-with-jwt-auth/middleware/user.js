const jwt = require("jsonwebtoken");
const { JWT_SECRET} =require("../config");


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token= req.headers.authorization;
    //bearer jswt
     
    const words= token.split(" ");

    const jwtToken = words[1];
    try{
        const jwtDecodedValue = jwt.verify(jwtToken,JWT_SECRET);

        // authenetication    
            if(jwtDecodedValue.username){  // save one db calll it checki liken inm memory nternally username is signed in or not
              req.username=jwtDecodedValue.username  // pass username to next middleware 
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

module.exports = userMiddleware;