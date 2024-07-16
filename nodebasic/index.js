//using expressjs

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const authRoutes = require("./routes/auth");

// require("dotenv").config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true, --this is deprecated
    // useFindAndModify: false, --this is deprecated
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB connection error ", err));

app.use(cors());
app.use(morgan("dev"));

//routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("server is running on port 8000"));
