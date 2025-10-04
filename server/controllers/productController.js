import {v2 as cloudinary} from 'cloudinary'
import Product from '../models/Product.model.js';


// Add Product Controller : api/product/add
export const addProduct = async (req, res)=>{
try {
    let productData = JSON.parse(req.body.productData)
    const images = req.files;
    let imageURL = await Promise.all(
        images.map(async (item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
        })
    )
    await Product.create({...productData,image:imageURL})
    return res.status(201).json({success:true,message:"Product Added"})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:error.message});
}
}

//Get Product list : api/product/product-list
export const getProductList = async (req, res)=>{
try {
    const products = await Product.find({});
    return res.status(200).json({success:true,products})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:error.message});
}
}

// Get single product : api/product/id
export const getSingleProduct = async (req, res)=>{
try {
    const {id} = req.body;
    const product = await Product.findById(id);
    return res.status(200).json({success:true,product})
} catch (error) {
    console.log(error.message);
    return res.status(500).json({success:false,message:error.message});
}
}

// Change Product Stock : api/product/stock
export const changeStock = async (req, res)=>{
try {
    const {id,inStock} = req.body;
    await Product.findByIdAndDelete(id,{inStock})
    return res.status(200).json({success:true,message:"Product Stock Updated"})
} catch (error) {
      console.log(error.message);
    return res.status(500).json({success:false,message:error.message});  
}
}