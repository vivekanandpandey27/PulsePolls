const jwt = require('jsonwebtoken');

exports.isAuthenticated = async(req,res,next)=>  {
    try{
        const token = req.cookies.token;

         if(!token) 
         {
             return res.status(401).json({
                 message:"user not authenticate"
             })
         }

         const decode = await jwt.verify(token,process.env.secret_code);
         
         if(!decode){
            return res.status(401).json({
                message:"invalid user"
            })
         }

         req.ID=decode.userId;
         console.log(decode);
        next();
    }
    catch(err){
        console.log(err);
    }

};