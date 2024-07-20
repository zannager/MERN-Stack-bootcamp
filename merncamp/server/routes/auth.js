import express from "express";
import { register } from "../controllers/auth.js"; //controllers

const router = express.Router();

router.post("/register", register);

export default router;
