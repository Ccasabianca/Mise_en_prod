const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello World');
});

app.get('/date', (req, res)=>{
    res.send(`Current date and time : ${new Date()}`);
});

app.get('/users', (req, res)=>{
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.json(users);
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});