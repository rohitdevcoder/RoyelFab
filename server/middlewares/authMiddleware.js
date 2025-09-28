import jwt from 'jsonwebtoken'

const authUser = async (req, res , next) =>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({success:false,message:"Unauthorized Access"});
    }
    try {
        const tokenDecoded = jwt.verify(token,process.env.JWT_SECRET)
        if(tokenDecoded.id){
            req.user = {id:tokenDecoded.id}
        }else{
        return res.status(401).json({success:false,message:"Unauthorized Access"});
        }
        next();
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}

export default authUser;