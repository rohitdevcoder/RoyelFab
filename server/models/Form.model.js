import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String},
    message:{type:String}
})

const Form = mongoose.model('form',formSchema);
export default Form