//nodejs event loop

const fs = require("fs");

// fs.watch("target.txt", () => console.log("file changed"));
// console.log("now watching target.txt for file changes");

const fileName = "target.txt";

fs.readFile(fileName, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

console.log("watching target.txt - should be executed first"); //executed first since its easier to process
