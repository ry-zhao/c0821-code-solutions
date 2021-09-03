var $allSpan = document.querySelectorAll('span');
var $dimmer = document.querySelector('.dimmer');
var $h2 = document.querySelector('h2');
var $button = document.querySelector('button');
var i = 0;
var str = 'grumpy wizards make toxic brew';
var hit = 0;
var miss = 0;

//  PSEUDOCODE - evaluate
//  check if i is within range of str
//    -if so, check if event.key matches str at i
//      -if so, assign $allSpan at i class 'correct'
//      -increment i
//      -if i is not out of range
//        -assign $allSpan at i class 'current'
//      -else
//        -unhide dimmer
//    -else
//      -assign $allSpan at i class 'incorrect'

function evaluate(event) {
  if (i < str.length) {
    if (event.key === str[i]) {
      $allSpan[i].className = 'correct';
      i++;
      hit++;
      if (i < str.length) {
        $allSpan[i].className = 'current';
      } else {
        $dimmer.className = 'dimmer container';
        $h2.textContent = 'Your accuracy: ' +
         (hit / (hit + miss)).toPrecision(4) * 100 + '%';
      }
    } else {
      $allSpan[i].className = 'incorrect';
      miss++;
    }
  }
}

function reset() {
  i = 0;
  hit = 0;
  miss = 0;
  $dimmer.className = 'dimmer container hide';
  $allSpan[0].className = 'current';
  for (var j = 1; j < $allSpan.length; j++) {
    $allSpan[j].className = '';
  }
}

document.addEventListener('keypress', evaluate);
$button.addEventListener('click', reset);
