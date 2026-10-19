require("dotenv") .config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => { 
  console.log(`${req.method} ${req.url}`);  
next();
}) 

app.get('/', (req, res) => { 
 res.send('My Week2 API!'); 
}); 

app.post('/echo', (req, res) => {
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

app.use((req, res, next) => { 
 console.log(`${req.method} ${req.url} - ${new Date()}`); 
next();
});

app.get('/logged', (req, res) => { 
 res.send('This was logged'); //
});

app.listen(PORT, () => { 
console.log(`Server is running on http://localhost:${PORT}`); 
});
