import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const dexElement = (
  <ul>
    {pokedex.map(entry => <Item key={entry.number} value={entry.name} />)}
  </ul>);

ReactDOM.render(dexElement, document.getElementById('root'));
