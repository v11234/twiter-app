import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express";
import userRoute from "./routes/user.route.js"
 const app=express();
 app.use(cors());

 app.use(express.json());

 app.use(clerkMiddleware());
 app.use("api/users",userRoute);

const PORT=ENV.PORT || 5001;
 app.get("/api/health",(req,res)=>{
   res.send('Hello');
 });

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();