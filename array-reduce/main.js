const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

console.log('sum:', numbers.reduce((prev, curr) => prev + curr));
console.log('product:', numbers.reduce((prev, curr) => prev * curr));
console.log('balance:', account.reduce((prev, curr) => {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else {
    return prev - curr.amount;
  }
}, 0));
console.log('composite:', traits.reduce((prev, curr) => {
  for (const key in curr) {
    prev[key] = curr[key];
  }
  return prev;
}));
