 //raw server.js (No NPM neeeded, just run node server.js to start the server)const http = require('http'); //import the built-in http module
   const http = require('http'); //import the built-in http     
   const server = http.createServer((req, res) => {
 //create a server that listens for incoming requests
 // req: Incoming request (method and url)
 // res: Outgoing response (write headers and body)

 if (res.method === 'GET' && req.url === '/') { 
    // manual route check
   res.writeHead(200, { 'Content-Type': 'text/plain' }); //set the status code to 200 (OK) and the content type to plain text
     res.end('Hello, from Node.js!'); //send the response and end the connection
   }else {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); //set the status code to 404 (Not Found) and the content type to plain text
    res.end('404 Not Found:('); //send the response and end the connection
   }
});
   const PORT = 3000; //define the port number to listen on
   server.listen(PORT, () => {
     console.log(`Raw Server is running on http://localhost:${PORT}`); //log a message to the console when the server is running
   });
