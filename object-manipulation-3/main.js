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

function createDeck() {
  var deck = [];
  var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  var ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = {};
      card.rank = ranks[j];
      card.suit = suits[i];
      deck.push(card);
    }
  }
  return deck;
}

var deck = createDeck();
deck = _.shuffle(deck);

var cody = {
  name: 'Cody',
  cards: [],
  score: 0
};

var tim = {
  name: 'Tim',
  cards: [],
  score: 0
};

var cass = {
  name: 'Cass',
  cards: [],
  score: 0
};

var tj = {
  name: 'TJ',
  cards: [],
  score: 0
};

var lfz = [cody, tim, cass, tj];

play(lfz, 2);

function play(players, number) {
  var scores = [];
  var winners = [];
  for (var k = 0; k < players.length; k++) {
    for (var l = 0; l < number; l++) {
      players[k].cards.push(deck.pop());
    }
  }
  for (var m = 0; m < players.length; m++) {
    for (var n = 0; n < players[m].cards.length; n++) {
      switch (players[m].cards[n].rank) {
        case 'A':
          players[m].score += 11;
          break;
        case 'J':
        case 'Q':
        case 'K':
          players[m].score += 10;
          break;
        default:
          players[m].score += players[m].cards[n].rank;
      }
    }
    console.log(players[m].name + '\'s score: ' + players[m].score);
    scores.push(players[m].score);
  }
  var max = _.max(scores);
  for (var o = 0; o < players.length; o++) {
    if (players[o].score === max) {
      winners.push(players[o]);
    }
  }
  if (winners.length > 1) {
    console.log('Tied!');
    play(winners, number);
  } else {
    console.log(winners[0].name + ' wins!');
  }
}
