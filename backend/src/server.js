import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
 const app=express();
const PORT=ENV.PORT || 5001;

connectDB()


 app.get("/api/health",(req,res)=>{
   res.send('Hello');
 });

 app.listen(PORT,(req,res)=>{
    console.log("Server started running on PORT:",PORT);
 });
