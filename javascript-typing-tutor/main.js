var $allSpan = document.querySelectorAll('span');
var i = 0;
var str = 'grumpy wizards make toxic brew';

//  PSEUDOCODE - evaluate
//  check if i is within range of str
//    -if so, check if event.key matches str at i
//      -if so, assign $allSpan at i class 'correct'
//      -increment i
//      -assign $allSpan at i class 'current'
//    -else
//      -assign $allSpan at i class 'incorrect'

function evaluate(event) {
  if (i < str.length) {
    if (event.key === str[i]) {
      $allSpan[i].className = 'correct';
      i++;
      $allSpan[i].className = 'current';
    } else {
      $allSpan[i].className = 'incorrect';
    }
  }
}

document.addEventListener('keypress', evaluate);
