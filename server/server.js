import express from 'express'
import 'dotenv/config'
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import userRouter from './route/userRouter.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());



app.get('/',(req,res)=>{
res.send("Api is working")
})

// Api Routers
app.use('/api/user',userRouter)

app.listen(port,()=>{
    console.log(`Api is working on http://localhost:${port}`);
})