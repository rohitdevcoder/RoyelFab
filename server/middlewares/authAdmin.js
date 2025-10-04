import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next)=>{
    const {adminToken} = req.cookies;
    if(!adminToken){
        res.status(400).json({success:false,message:"Not Authorized, No token"})
    }
    try {
        const tokenDecoded = jwt.verify(adminToken,process.env.JWT_SECRET);
        if(tokenDecoded.email === process.env.ADMIN_EMAIL){
            next();
        }else{
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
    } catch (error) {
       return res.status(500).json({success:false,message:error.message}) 
    }
}

export default adminAuth;