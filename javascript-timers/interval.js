var $h1 = document.querySelector('h1');
var i = 4;

var interval;

function majorTom() {
  if (i > 1) {
    $h1.textContent = (--i).toString();
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

interval = setInterval(majorTom, 1000);
