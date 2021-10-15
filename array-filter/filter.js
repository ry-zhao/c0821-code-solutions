function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

console.log('Filter function tests');
console.log('evenNumbers:', filter(numbers, number => number % 2 === 0));
console.log('overFive:', filter(numbers, number => number > 5));
console.log('startWithE:', filter(names, name => name[0] === 'E'));
console.log('haveD:', filter(names, name => name.includes('d') || name.includes('D')));
