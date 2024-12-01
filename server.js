const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = []; // In-memory storage for demo purposes

// Sign Up Route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = { name, email, password };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully' });
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login successful', user });
    }

    res.status(401).json({ message: 'Invalid email or password' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});