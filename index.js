import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { routes } from './routes/routes.js';
const app=express();
mongoose.connect("mongodb://localhost:27017/School_library")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(routes)

app.listen(3000,()=>{
    console.log("port start");

})