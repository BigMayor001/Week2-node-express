const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());

app.use((req, res, next) => { 
  console.log(`${req.method} ${req.url}`);  
next();
}) 

app.get('/', (req, res) => { 
 res.send('My Week2 API!'); 
});

app.post('/user', (req, res) => {
    console.log({name: 'Mayowa', email: 'Glossy@gmail.com'});
    res.json('Hello, Mayowa');
});

app.get('/user', (req, res) => {
  const { name, email } = req.query;
  console.log({ name, email });
  res.json({ name, email });
});

app.use((req, res) => {
  res.status(400).send('400 Not Found :(');
});

app.use((req, res, next) => { //middleware to handle errors
 console.log(`${req.method} ${req.url} - ${new Date()}`); //log the error message
next();
});

app.get('/logged', (req, res) => { //define a route for the /add URL
 res.send('This was logged'); //send a response to the client
});

app.listen(port, () => { //start the server and listen on the specified port
console.log(`Server is running on http://localhost:${port}`); //log a message to the console when the server is running
});
