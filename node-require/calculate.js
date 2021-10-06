const add = require('./add').add;
const subtract = require('./subtract').subtract;
const multiply = require('./multiply').multiply;
const divide = require('./divide').divide;

if (process.argv.length < 5) {
  console.log('Invalid number of arguments.');
}

switch (process.argv[3]) {
  case 'add':
    console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
    break;
  case 'subtract':
    console.log(subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
    break;
  case 'multiply':
    console.log(multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
    break;
  case 'divide':
    console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
    break;
  default:
    console.log('Invalid function.');
}
