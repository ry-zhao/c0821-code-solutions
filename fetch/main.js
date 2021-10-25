fetch('https://pokeapi.co/api/v2/pokemon/slowking/')
  .then(response => response.json())
  .then(data => console.log(data));
