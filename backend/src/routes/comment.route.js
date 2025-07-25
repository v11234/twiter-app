import express from "express";

import { createComment, getComments, deleteComment } from "../controllers/comment.controller.js";
import { protectRoute } from "../middleware/auth.midleware.js";

const router = express.Router();

// public routes
router.get("/post/:postId", getComments);

// protected routes
router.post("/post/:postId", protectRoute, createComment);
router.delete("/:commentId", protectRoute, deleteComment);

export default router;
