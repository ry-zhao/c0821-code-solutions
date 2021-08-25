/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
var homer = {
  name: 'Homer Simpson',
  age: 39
};

var bart = {
  name: 'Bart Simpson',
  age: 10
};

function isUnderFive(num) {
  if (num < 5) {
    return true;
  } else return false;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else return false;
}

function startsWithJ(str) {
  if (str[0] === 'J') {
    return true;
  } else return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(num) {
  if (num === 7) {
    return 'neutral';
  } else if (num < 7 || num >= 0) {
    return 'acid';
  } else if (num > 7 || num <= 14) {
    return 'base';
  } else { return 'invalid pH level'; }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the Warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else return 'Goodnight everybody!';
}
