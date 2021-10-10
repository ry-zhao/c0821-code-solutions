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
  req.body.id = nextId;
  grades[nextId++] = req.body;
  res.status(201).json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server now listening at port 3000...');
});
