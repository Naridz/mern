import express from "express"
import bodyParser from "body-parser";
import {router as productRouter} from "./modules/product/product.controller.js"
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
const mongoDB = 
'mongodb+srv://Inwza007:Inwza007@inwzaa.sdqftse.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//CORS
app.use(cors());
//Router
app.use(productRouter)

app.listen(3000,async()=>{
    console.log("http://localhost:3000");
    mongoose.set('strictQuery',true);
    await mongoose.connect(mongoDB)
    .then(()=>{
        console.log('connected to mongoDB');
        
    }).catch((error)=>{
        console.log(error)
    })
})


