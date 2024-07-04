//sync vs non async

const fs = require("fs");
const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());
console.log("watching target.txt - should be executed based on order");
