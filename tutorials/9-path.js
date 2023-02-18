const path = require("path");
//platform seperater property - /
console.log(path.sep);
//platform joiner
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);

console.log(base);
//abssolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
