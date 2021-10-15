const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log('doubled:', numbers.map(num => num * 2));
console.log('prices:', numbers.map(num => `$${num}.00`));
console.log('upperCased:', languages.map(lang => lang.toUpperCase()));
console.log('firstLetters:', languages.map(lang => lang[0]));
