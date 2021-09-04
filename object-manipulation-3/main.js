//  Card Game
//  input: n/a
//  output: n/a

//  create Array representing standard 52-card deck
//  shuffle deck and assign shuffled Array to deck
//  create and store an Array with two player Objects with name, cards, and score properties
//  traverse players
//    pop two cards from deck and push to player cards
//  traverse players
//    traverse cards
//      add card value to score
//  compare player scores
//    if first player has higher score
//      log "Cody wins"
//    else
//      log "Tim wins"

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

deck = _.shuffle(deck);

var players = [
  {
    name: 'Cody',
    cards: [],
    score: 0
  },
  {
    name: 'Tim',
    cards: [],
    score: 0
  }
];

for (var i = 0; i < players.length; i++) {
  players[i].cards.push(deck.pop());
  players[i].cards.push(deck.pop());
}

for (var j = 0; j < players.length; j++) {
  for (var k = 0; k < players[j].cards.length; k++) {
    switch (players[j].cards[k].rank) {
      case 'A':
        players[j].score += 11;
        break;
      case 'J':
      case 'Q':
      case 'K':
        players[j].score += 10;
        break;
      default:
        players[j].score += players[j].cards[k].rank;
    }
  }
}

console.log('Cody\'s score:', players[0].score);
console.log('Tim\'s score:', players[1].score);

if (players[0].score === players[1].score) {
  console.log('Tied!');
} else if (players[0].score > players[1].score) {
  console.log('Cody wins!');
} else {
  console.log('Tim wins!');
}
