const express = require('express'); 
const app = express(); 
const port = 3000; 
 
app.get('/', (req, res) => { 
  res.send('Ini adalah HTTP method GET') 
}); 
 
app.post('/', (req, res) => { 
  res.send('Ini adalah HTTP method POST') 
}); 
 
app.put('/', (req, res) => { 
  res.send('Ini adalah HTTP method PUT') 
}); 
 
app.delete('/', (req, res) => { 
  res.send('Ini adalah HTTP method DELETE')
}); 

app.get('/user', (req, res) => { 
    res.send('Ini adalah HTTP method GET dari user') 
}); 
   
app.post('/user', (req, res) => { 
    res.send('Ini adalah HTTP method POST dari user') 
}); 
   
app.put('/user', (req, res) => { 
    res.send('Ini adalah HTTP method PUT dari user') 
}); 

app.delete('/user', (req, res) => { 
    res.send('Ini adalah HTTP method DELETE dari user') 
}); 

app.listen(port, () => { 
  console.log(`cli-nodejs-api listening at http://localhost:${port}`) 
});