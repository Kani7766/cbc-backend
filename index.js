import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from './router/studentRouter.js';
import productRouter from './router/productRouter.js';
import userRouter from "./router/userRouter.js";


const app = express();

const mongoUrl = "mongodb+srv://Admin:224@cluster0.lyb50.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=> {
    console.log("Database connected!");
})
app.use(bodyParser.json())

app.use(

    (req,res,next)=>{
  
      const token = req.header("Authorization")?.replace("Bearer ","")
      console.log(token)
  
      if(token != null){
        jwt.verify(token,"cbc-secret-key-7973" , (error,decoded)=>{
  
          if(!error){
            req.user = decoded        
          }
  
        })
      }
  
      next()
  
    }
  
  )

app.use("/api/students",studentRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)

app.listen(
    5000,
    ()=>{
        console.log("Server is running on port 5000");
    }
)