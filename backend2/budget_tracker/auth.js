require("dotenv").config()
const jwt=require("jsonwebtoken")

const auth = (req,res,next)=>{
    try{
        const token=req.headers["authorization"]
        const t=token && token.split(" ")[1];
        const ud=jwt.verify(t,process.env.JWT_KEY);
        req.userdt=ud
        // this route is only used to verify the token at login
        return res.json({ud,message:"successfully login"})
    }catch(err){
        console.log(err.message)
        return res.status(401).json({message:"Unauthorized: "+err.message})
    }
}

module.exports=auth
