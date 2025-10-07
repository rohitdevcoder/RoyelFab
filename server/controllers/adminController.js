import jwt from 'jsonwebtoken'



//Admin Login : api/admin/login
export const adminLogin = async (req, res)=>{
try {
    const {email,password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('adminToken',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'?'none':'strict',
            maxAge:7*24*60*60*1000
        })
    return res.status(201).json({success:true,message:"Admin Login succesfully"})
    }else{
        return res.status(400).json({success:false,message:"Enter correct admin credentials"});
    }
} catch (error) {
    return res.status(500).json({success:false,message:error.message})
}
}

//Check admin : api/admin/is-auth
export const isAdmin = async (req, res) =>{
try {
    return res.status(200).json({success:true,message:"Admin"})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:"internal server error"})
}
}

//Admin Logout : api/admin/logout
export const adminLogout = async (req, res)=>{
try {
    res.clearCookie('adminToken',{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:process.env.NODE_ENV === "production" ? 'none' : 'strict'
    })
    return res.status(200).json({success:true,message:'Admin logged out successfully'})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:error.message})
}
}