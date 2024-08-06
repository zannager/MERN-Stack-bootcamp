import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import path from "path";

// const morgan = require("morgan");
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
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR =>", err));

//middleware

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//   })
// );
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));

//autoload routues
// readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const loadRoutes = async () => {
  const routeFiles = readdirSync("./routes");
  for (const file of routeFiles) {
    const routePath = path.resolve("./routes", file);
    const { default: route } = await import(routePath);
    app.use("/api", route);
  }
};

loadRoutes().catch((err) => {
  console.error("Error loading routes:", err);
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server running on port ${port}`));
