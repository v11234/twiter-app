import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js"
import commentRoute from "./routes/comment.route.js"
import notificationRoute from "./routes/notification.route.js"
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";
const app = express();
app.use(cors());

app.use(express.json());

app.use(clerkMiddleware());
app.use(arcjetMiddleware);



app.use("api/users", userRoute);
app.use("api/post", postRoute);
app.use("api/comment",commentRoute)
app.use("api/notification",notificationRoute)



// error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const PORT = ENV.PORT || 5001;
app.get("/api/health", (req, res) => {
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