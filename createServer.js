let http = require('http');

// STEP 1: Create a Server
const server = http.createServer((request, response) => {
    response.end('Hello from the server!');
    console.log('A new request received.');
    // console.log(response);
})

// STEP 2: Start the Server
server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
})
