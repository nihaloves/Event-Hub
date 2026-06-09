import express from "express";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/loginController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, getProfile);

export default router;