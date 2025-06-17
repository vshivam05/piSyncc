
import express from "express";
import {
  getAllDevices,
  triggerSync,
  getErrorDevices,
} from "../controllers/deviceController.js";

const router = express.Router();

router.get("/devices", getAllDevices);
router.post("/sync/:deviceId", triggerSync);
router.get("/errors", getErrorDevices);

export default router;
