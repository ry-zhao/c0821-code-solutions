//  Card Game
//  input: n/a
//  output: n/a

console.log('Lodash is loaded:', typeof _ !== 'undefined');
var deck = [{ rank: 'A', suits: 'Clubs' }, { rank: 2, suits: 'Clubs' },
  { rank: 3, suits: 'Clubs' }, { rank: 4, suits: 'Clubs' },
  { rank: 5, suits: 'Clubs' },
  { rank: 6, suits: 'Clubs' }, { rank: 7, suits: 'Clubs' },
  { rank: 8, suits: 'Clubs' }, { rank: 9, suits: 'Clubs' },
  { rank: 10, suits: 'Clubs' },
  { rank: 'J', suits: 'Clubs' }, { rank: 'Q', suits: 'Clubs' },
  { rank: 'K', suits: 'Clubs' }, { rank: 'A', suits: 'Diamonds' },
  { rank: 2, suits: 'Diamonds' },
  { rank: 3, suits: 'Diamonds' }, { rank: 4, suits: 'Diamonds' },
  { rank: 5, suits: 'Diamonds' }, { rank: 6, suits: 'Diamonds' },
  { rank: 7, suits: 'Diamonds' },
  { rank: 8, suits: 'Diamonds' }, { rank: 9, suits: 'Diamonds' },
  { rank: 10, suits: 'Diamonds' }, { rank: 'J', suits: 'Diamonds' },
  { rank: 'Q', suits: 'Diamonds' },
  { rank: 'K', suits: 'Diamonds' }, { rank: 'A', suits: 'Hearts' },
  { rank: 2, suits: 'Hearts' }, { rank: 3, suits: 'Hearts' },
  { rank: 4, suits: 'Hearts' },
  { rank: 5, suits: 'Hearts' }, { rank: 6, suits: 'Hearts' },
  { rank: 7, suits: 'Hearts' }, { rank: 8, suits: 'Hearts' },
  { rank: 9, suits: 'Hearts' },
  { rank: 10, suits: 'Hearts' }, { rank: 'J', suits: 'Hearts' },
  { rank: 'Q', suits: 'Hearts' }, { rank: 'K', suits: 'Hearts' },
  { rank: 'A', suits: 'Spades' }, { rank: 2, suits: 'Spades' },
  { rank: 3, suits: 'Spades' }, { rank: 4, suits: 'Spades' },
  { rank: 5, suits: 'Spades' },
  { rank: 6, suits: 'Spades' }, { rank: 7, suits: 'Spades' },
  { rank: 8, suits: 'Spades' }, { rank: 9, suits: 'Spades' },
  { rank: 10, suits: 'Spades' },
  { rank: 'J', suits: 'Spades' }, { rank: 'Q', suits: 'Spades' },
  { rank: 'K', suits: 'Spades' }];

console.log(deck);

deck = _.shuffle(deck);

console.log(deck);
