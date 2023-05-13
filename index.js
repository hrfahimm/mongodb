/** @format */

// const os = require("os");
// const fs = require("fs");
// console.log(os.version());
// console.log(os.totalmem());
// console.log(os.arch());
//fs.writeFileSync("hellow.text", "iam writing from node");
// fs.appendFileSync("hellow.txt", "more text");
// fs.appendFileSync("hellow.txt", "\nNew Line more text");
// const content = fs.readFileSync("hellow.txt");
// console.log(content.toString());

// console.log("runnng server");

const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
