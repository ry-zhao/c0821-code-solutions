function reduce(array, reduce, initialValue) {
  let prev;
  if (initialValue !== undefined) {
    prev = initialValue;
    for (let i = 0; i < array.length; i++) {
      prev = reduce(prev, array[i]);
    }
  } else {
    prev = array[0];
    for (let i = 1; i < array.length; i++) {
      prev = reduce(prev, array[i]);
    }
  }
  return prev;
}

console.log('Now testing reduce function...');
console.log('sum:', reduce(numbers, (prev, curr) => prev + curr));
console.log('product:', reduce(numbers, (prev, curr) => prev * curr));
console.log('balance:', reduce(account, (prev, curr) => {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else {
    return prev - curr.amount;
  }
}, 0));
console.log('composite:', reduce(traits, (prev, curr) => {
  for (const key in curr) {
    prev[key] = curr[key];
  }
  return prev;
}));
