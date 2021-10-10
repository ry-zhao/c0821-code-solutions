const fs = require('fs');
let output = '';

const cat = i => fs.readFile(`./${process.argv[i]}`, 'utf-8', (err, data) => {
  if (err) throw err;
  output += data;
  if (i === process.argv.length - 1) {
    console.log(output);
  } else {
    output += '\n';
    cat(++i);
  }
});

cat(2);
