const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

//if mentioned file is there node will overwrite content,
//but if there is no such file node will create and then write there
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result; ${first},${second}`,
  //append the value
  { flag: "a" }
);
