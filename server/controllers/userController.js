import User from "../models/User.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// Register : api/user/register
export const register = async (req, res)=>{
try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({success:false,message:"Missing Data"});
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({success:false,message:"User already exists"});
    }
    const hashPassword = await bcrypt.hash(password,10);
    const user = await User.create({name,email,password: hashPassword});

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge:7*24*60*60*1000
    })

    return res.status(201).json({success:true,message:"User Created Successfully",user:{name: user.name ,email:user.email}})
    
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:"Internal Server Error"})
}
}

//Login : api/user/login 
export const login = async (req, res)=>{
try {
   const {email,password} = req.body;
   if(!email || !password){
    return res.status(400).json({success:false,message:"Missing Data"});
   }
   const user = await User.findOne({email});
   if(!user){
    return res.status(400).json({success:false,message:"User doesn't exists"})
   }

   const isPasswaredMatched = await bcrypt.compare(password,user.password);
   if(!isPasswaredMatched){
    res.status(400).json({success:false,message:"Password doesn't matched"});
   }

   const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
   res.cookie('token',token,{
    httpOnly:true,
    secure:process.env.NODE_ENV==='production',
    sameSite:process.env.NODE_ENV==='production'?'none':'strict',
    maxAge:7*24*60*60*1000
   })

   res.status(201).json({success:true,message:"User Login Successfully",user:{name:user.name,email:user.email}});

} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:"Internal Server Error"}) 
}
}

//isAuth : api/user/is-auth
export const isAuth = async (req, res) =>{
const userId = req.user.id;
try {
    const user = await User.findById(userId).select("-password");
    return res.status(200).json({success:true,user})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:"Internal Server Error"})   
}
}

//Logout : api/user/logout
export const logout = async (req, res)=>{
try {
    res.clearCookie('token',{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:process.env.NODE_ENV === "production" ? 'none' : 'strict'
    })
    return res.status(200).json({success:true,message:'User logged out successfully'})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:error.message})
}
}