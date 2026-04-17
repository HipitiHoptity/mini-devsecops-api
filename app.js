const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Mini API DevSecOps OK' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});