const fs = require('fs');

const data = (Math.floor(Math.random() * Number.MAX_VALUE)).toString();

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  console.log(data);
});
