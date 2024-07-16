//using expressjs

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(morgan("dev"));

//routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("server is running on port 8000"));
