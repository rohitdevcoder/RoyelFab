import express from 'express'
import 'dotenv/config'
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import userRouter from './route/userRouter.js';
import adminRouter from './route/adminRouter.js';
import productRouter from './route/productRouter.js';
import cors from 'cors'
import formRouter from './route/formRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowOrigin = ['http://localhost:5173']
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowOrigin,credentials:true}))


app.get('/',(req,res)=>{
res.send("Api is working")
})

// Api Routers
app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/product',productRouter)
app.use('/api/form',formRouter)

app.listen(port,()=>{
    console.log(`Api is working on http://localhost:${port}`);
})