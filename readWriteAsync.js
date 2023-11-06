// reading and writing to file using a asynchronous method

let fs = require("fs");

fs.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fs.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
        fs.readFile('./files/append.txt', 'utf-8', (error3, data3) => {
            console.log(data3);
            fs.writeFile('./files/output.txt', `${data2}\n\n${data3}\n\nDate create ${new Date()}`, () => {
                console.log("File written successfully");
            });
        })
    })
})