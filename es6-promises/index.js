const takeAChance = require('./take-a-chance');

const takenChance = takeAChance('Ryan');

takenChance.catch(error => console.log(error.message));
takenChance.then(value => console.log(value));
