const Express = require('express');

const express = new Express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

express.get('/api/grades', (req, res) => {
  const response = [];
  for (const key in grades) {
    response.push(grades[key]);
  }
  res.json(response);
});

express.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server now listening on port 3000');
});
