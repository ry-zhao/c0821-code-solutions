var $h1 = document.querySelector('h1');

function greet() {
  $h1.textContent = 'Hello There';
}

setTimeout(greet, 2000);
