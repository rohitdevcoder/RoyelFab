import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    product_name:{ type: String, required: true },
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    mobile:{ type: Number, required: true },
    city:{ type: String, required: true },
    message:{ type: String}
})

const Order = mongoose.model('order',orderSchema);
export default Order;