import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  registerForEvent,
  getMyRegistrations,
  cancelRegistration,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", protect, registerForEvent);

router.get("/my", protect, getMyRegistrations);

router.delete("/:registrationId", protect, cancelRegistration);

export default router;