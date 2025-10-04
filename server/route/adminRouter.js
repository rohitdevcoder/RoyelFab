import express from 'express'
import { adminLogin, adminLogout, isAdmin } from '../controllers/adminController.js';
import adminAuth from '../middlewares/authAdmin.js';


const adminRouter =  express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/is-auth',adminAuth,isAdmin);
adminRouter.get('/logout',adminAuth,adminLogout);

export default adminRouter;