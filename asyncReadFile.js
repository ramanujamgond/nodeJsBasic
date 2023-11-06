// reading a file asyncronous code

let fs = require('fs');

fs.readFile('./files/input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Reading file....');