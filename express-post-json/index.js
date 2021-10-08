const express = require('express');

const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const response = [];
  for (const key in grades) {
    response.push(grades[key]);
  }
  res.json(response);
});

app.post('/api/grades', (req, res) => {
  const response = req.body;
  response.id = nextId;
  grades[nextId++] = response;
  res.status(201).json(response);
});

app.listen(3000, () => {
  console.log('Express server now listening at port 3000...');
});
