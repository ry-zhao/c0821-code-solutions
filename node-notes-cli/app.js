const fs = require('fs');

const data = require('./data.json');
const { notes } = data;

const updateData = () => fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
  if (err) {
    throw err;
  }
});

switch (process.argv[2]) {
  case 'read':
    for (const key in notes) {
      console.log(`${key}: ${notes[key]}`);
    }
    break;
  case 'create':
    notes[data.nextId++] = process.argv[3];
    updateData();
    break;
  case 'delete':
    delete notes[process.argv[3]];
    updateData();
    break;
  case 'update':
    notes[process.argv[3]] = process.argv[4];
    updateData();
    break;
  default:
    console.error('Invalid function!');
}
