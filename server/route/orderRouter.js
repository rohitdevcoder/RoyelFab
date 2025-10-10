import express from 'express';
import { deleteOrder, getOrders, placeOrder } from '../controllers/orderController.js';
import adminAuth from '../middlewares/authAdmin.js';

const orderRouter = express.Router();

orderRouter.post('/place-order',placeOrder)
orderRouter.get('/get-orders',getOrders);
orderRouter.post('/delete',adminAuth,deleteOrder);

export default orderRouter;