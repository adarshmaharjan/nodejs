const { readFileSync, writeFileSync } = require("fs");
// const path = require('path');
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
// const secondFilePath = path.resolve();
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second} \n`,
  { flag: "a" }
);

console.log("new task");
