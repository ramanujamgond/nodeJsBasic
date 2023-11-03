const fs = require("fs");

let textIn = fs.readFileSync("./files/input.txt", "utf-8");
console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \n Created On ${new Date()}`;
fs.writeFileSync("./files/output.txt", content);