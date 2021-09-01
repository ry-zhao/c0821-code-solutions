/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

//  renderPokemon
//  input: Object pokemon
//  output: Pokedex entry element Object

//  create and store div element of class column-third
//  create and store div element of class pokemon-card
//  create and store img element of pokemon
//  create and store div element of class pokemon-card-text
//  create and store h2 element with textContent pokemon.name
//  create and store h3 element with textContent '#' + pokemon.number
//  create and store p with textContent pokemon.description
//  append name to pokemon-card-text
//  append number to pokemon-card-text
//  append description to pokemon-card-text
//  append img to pokemon-card
//  append pokemon-card-text to pokemon-card
//  append pokemon-card to column-third
//  return column-third

function renderPokemon(pokemon) {
  var $col = document.createElement('div');
  $col.setAttribute('class', 'column-third');
  var $pokemonCard = document.createElement('div');
  $pokemonCard.setAttribute('class', 'pokemon-card');
  var $img = document.createElement('img');
  $img.setAttribute('src', pokemon.imageUrl);
  var $pokemonCardText = document.createElement('div');
  $pokemonCardText.setAttribute('class', 'pokemon-card-text');
  var $name = document.createElement('h2');
  $name.appendChild(document.createTextNode(pokemon.name));
  var $number = document.createElement('h3');
  $number.appendChild(document.createTextNode('#' + pokemon.number));
  var $description = document.createElement('p');
  $description.appendChild(document.createTextNode(pokemon.description));
  $pokemonCardText.appendChild($name);
  $pokemonCardText.appendChild($number);
  $pokemonCardText.appendChild($description);
  $pokemonCard.appendChild($img);
  $pokemonCard.appendChild($pokemonCardText);
  $col.appendChild($pokemonCard);
  return $col;
}

var $row = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  $row.append(renderPokemon(pokedex[i]));
}
