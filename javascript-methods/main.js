var x = 60;
var y = 400;
var z = 20;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);
var heroes = ['Superman', 'Batman', 'Ironman', 'Antman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
var library = [
  {
    title: 'Don Quixote',
    author: 'Miguel Cervantes'
  },
  {
    title: 'Divan',
    author: 'Hafiz'
  },
  {
    title: 'Republic',
    author: 'Plato'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
var fullName = 'Ryan Zhao';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
