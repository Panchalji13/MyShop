import express from "express";
import { SignUp } from "../controllar/admin.control.js";

const router = express.Router();

router.post("/signup",SignUp);

export default router; 