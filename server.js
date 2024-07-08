// backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Sample endpoint to get data
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!', data: [1, 2, 3, 4, 5] });
});

// Sample endpoint to receive data
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'Data received!', receivedData });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
