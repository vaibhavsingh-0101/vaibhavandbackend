// require('dotenv').config({path:'./env'})
import connectDB from './db/index.js';
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})


connectDB()

// import mongoose from 'mongoose';
// import { DB_NAME } from './constant';

// ;(async()=>{ try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// }catch(error){
//     console.error("ERROR: ",error)
//     throw err
// }})() 