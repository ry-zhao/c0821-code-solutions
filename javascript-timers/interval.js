var $h1 = document.querySelector('h1');
var i = 4;

function majorTom() {
  if (i > 1) {
    $h1.textContent = --i;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(majorTom, 1000);
