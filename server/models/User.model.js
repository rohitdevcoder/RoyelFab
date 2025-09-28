import mongoose from "mongoose";


const userShema = new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true}
},{minimize:false})

const User = mongoose.models.user || mongoose.model('user',userShema);
export default User;