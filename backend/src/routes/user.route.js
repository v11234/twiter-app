import express from "express";
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.midleware.js";
const router=express.Router();



router.get("/profile/:username",getUserProfile);

router.post("/sync",protectRoute,syncUser);
router.post("/me",protectRoute,getCurrentUser);
router.put("/profile",protectRoute,updateProfile);
router.post("/follow/:targetUserId",protectRoute,followUser);
//update profile=>auth


export default router