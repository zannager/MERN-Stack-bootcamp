// const express = require("express");

// const router = express.Router();

// const { users } = require("../controllers/auth");

// router.get("/users", users);

// module.exports = router;

//ES syntax

import express from "express";
import { users } from "../controllers/auth.js";

const router = express.Router();

router.get("/users", users);

export default router;
