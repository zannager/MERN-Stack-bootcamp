//using expressjs

const express = require("express");
const app = express();

//get post put delete
app.get("/api", function (req, res) {
  //   res.send("hello from node api");
  res.json({
    user: {
      name: "greg",
      age: 30,
    },
  });
});

app.listen(8000, () => console.log("server is running on port 8000"));
