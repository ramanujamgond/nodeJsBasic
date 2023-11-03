// insert text in js
const readline = require("readline");
const fs = require("fs");

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputData.question("Please enter your name to insert in record: ", (name) => {
    let content = `The name inserted on ${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()} is ${name}\n`;
    fs.writeFileSync("./files/record.txt", content)
    inputData.close();
})

inputData.on("close", () => {
    let insertedData = fs.readFileSync("./files/record.txt", "utf-8");
    console.log(insertedData);
    process.exit(0);
})