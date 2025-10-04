import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:Array,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    inStrock:{type:Boolean,default:true}
})

const Product = mongoose.models.product || mongoose.model('product',productSchema);
export default Product