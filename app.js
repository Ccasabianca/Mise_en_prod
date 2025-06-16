const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/date', (req, res) => {
    res.send(`Current date and time : ${new Date()}`);
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.json(users);
});

app.post('/users', (req, res) => {

    const users = [
        {
            id: 1, "name": "Jasmine Carter",
            "email": "jasmine.carter@example.com"
        },
        {
            id: 2, "name": "Liam Fernandez",
            "email": "liam.fernandez@example.com"
        },
        {
            id: 3, "name": "Noah Schmidt",
            "email": "noah.schmidt@example.com"
        }
    ];
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});