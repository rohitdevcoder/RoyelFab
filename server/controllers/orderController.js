import Order from "../models/Order.model.js";


//Place Order :  api/order/place-order
export const placeOrder = async (req, res)=>{
    try {
        const {product_name,name,email,mobile,city,message} = req.body;
        if(!product_name || !name || !email || !mobile || !city){
            return res.status(400).json({success:false,message:"All fields are required except message"});
        }
        await Order.create({product_name,name,email,mobile,city,message});
        return res.status(201).json({success:true,message:"Order placed successfully"})
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({success:false,message:error.message});  
    }
}

//Get Orders : api/order/get-orders
export const getOrders = async (req, res)=>{
    try {
       const orderDatas = await Order.find({});
       return res.status(200).json({success:true,orderDatas}) 
    } catch (error) {
      return res.status(500).json({success:false,message:error.message});  
    }
}

//Delete Order : api/order/delete
export const deleteOrder = async (req, res) =>{
    try {
        const {id} = req.body;
        await Order.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"Order deleted successfully"})
    } catch (error) {
      return res.status(500).json({success:false,message:error.message});  
    }
}