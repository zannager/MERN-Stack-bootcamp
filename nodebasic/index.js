//using expressjs

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//get post put delete
app.get("/api", function (req, res) {
  //   res.send("hello from node api");
  res.json({
    users: [
      {
        name: "greg",
        age: 30,
      },
      {
        name: "norm",
        age: 20,
      },
    ],
  });
});

app.listen(8000, () => console.log("server is running on port 8000"));
