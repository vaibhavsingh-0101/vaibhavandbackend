// require('dotenv').config({path:'./env'})
import { app } from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port : ${process.env.PORT}`)
    })
})
.catch ( (err)=>{
console.log("MONGO db connection failed !!!", err)
})
// import mongoose from 'mongoose';
// import { DB_NAME } from './constant';

// ;(async()=>{ try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// }catch(error){
//     console.error("ERROR: ",error)
//     throw err
// }})() 