const express = require('express');
const connectDB = require('./config/db');

// Init
const app = express();
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// server port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
