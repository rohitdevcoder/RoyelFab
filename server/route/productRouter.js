import express from 'express'
import { upload } from '../config/multer.js';
import adminAuth from '../middlewares/authAdmin.js';
import { addProduct, changeStock, getProductList, getSingleProduct } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.post('/add',upload.array(['images']),adminAuth,addProduct)
productRouter.get('/list',getProductList);
productRouter.get('/id',getSingleProduct);
productRouter.post('/stock',adminAuth,changeStock)

export default productRouter;