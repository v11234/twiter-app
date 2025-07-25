import express from "express";
import { getNotifications, deleteNotification } from "../controllers/notifacation.controller.js";
import { protectRoute } from "../middleware/auth.midleware.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/:notificationId", protectRoute, deleteNotification);

export default router;
