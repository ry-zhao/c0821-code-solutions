const map = (array, transform) => {
  const output = [];
  for (const element of array) {
    output.push(transform(element));
  }
  return output;
};

console.log('Testing map function...');
console.log('doubled:', map(numbers, num => num * 2));
console.log('prices:', map(numbers, num => `$${num}.00`));
console.log('upperCased:', map(languages, lang => lang.toUpperCase()));
console.log('firstLetters:', map(languages, lang => lang[0]));
