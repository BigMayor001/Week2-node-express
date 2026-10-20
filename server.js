require("dotenv") .config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => { 
 res.send('My Week2 API!'); 
}); 

app.post('/accept', (req, res) => {
    const { name, email } = req.body;
    console.log({ name, email });
    res.json('Hello, Mayowa!');
    if (!name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
});

app.get('/user/id', (req, res) => {
  const { name, email } = req.query;
  console.log({ name, email });
  res.json({ name, email });

});

app.use((req, res, next) => { 
  console.log(`${req.method} ${req.url}`);  
next();
});

app.use((req, res, next) => { 
 console.log(`${req.method} ${req.url} - ${new Date()}`); 
next();
});

app.get('/logged', (req, res) => { 
 res.send('This was logged');
});

app.listen(PORT, () => { 
console.log(`Server is running on http://localhost:${PORT}`); 
});
