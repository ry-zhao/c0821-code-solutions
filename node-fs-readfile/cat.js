const fs = require('fs');
let output = [];
const i = 2;

const cat = i => fs.readFile(`./${process.argv[i]}`, 'utf-8', (err, data) => {
  if (err) throw err;
  output += data + '\n';
  if (i === process.argv.length - 1) {
    console.log(output);
  } else {
    cat(++i);
  }
});

cat(i);
