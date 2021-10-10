const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const { notes } = data;
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const response = [];
  for (const note in notes) {
    response.push(notes[note]);
  }
  res.status(200).json(response);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  }
  const note = {};
  note.content = req.body.content;
  note.id = data.nextId;
  notes[data.nextId++] = note;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(500).json({ error: 'an unexpected error occured' });
    } else {
      res.status(201).json(note);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[id]) {
    delete notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
      } else {
        res.status(204).send();
      }
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if ((id < 0 || !Number.isInteger(id)) || !req.body.content) {
    const err = {};
    if (id < 0 || !Number.isInteger(id)) {
      err.invalidId = 'id must be a positive integer';
    }
    if (!req.body.content) {
      err.missingArgument = 'content is a required field';
    }
    res.status(400).json(err);
  } else if (notes[id]) {
    notes[id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
      } else {
        res.status(200).json(notes[id]);
      }
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.listen(3000, () => {
  console.log('Express server now listening at PORT 3000...');
});
