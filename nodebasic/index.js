//using expressjs

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

const app = express();

//db
mongoose
  .connect(
    "mongodb+srv://projectOne:yGPw803U7b3JJKNw@merncamp.lhd1lgz.mongodb.net/?retryWrites=true&w=majority&appName=merncamp",
    {
      useNewUrlParser: true,
      // useCreateIndex: true, --this is deprecated
      // useFindAndModify: false, --this is deprecated
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB connection error ", err));

app.use(cors());
app.use(morgan("dev"));

//routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("server is running on port 8000"));
