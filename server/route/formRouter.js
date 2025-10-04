import express from 'express'
import { createFormData, deleteFormData, getFormData } from '../controllers/formController.js';
import adminAuth from '../middlewares/authAdmin.js';


const formRouter = express.Router();

formRouter.post('/submit',createFormData);
formRouter.get('/form-data',adminAuth,getFormData)
formRouter.delete('/delete',adminAuth,deleteFormData)

export default formRouter;