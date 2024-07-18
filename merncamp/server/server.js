import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true, --this is deprecated
    // useFindAndModify: false, --this is deprecated
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR =>", err));

//middleware

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http;//localhost:3000"],
  })
);

app.post("/api/register", (req, res) => {
  console.log("REGISTER ENDPOINT =>", req.body);
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server running on port ${port}`));
