// PSEUDOCODE
// query and store body element
// query and store element of classes .bulb.off
// declare Boolean state and set to false
// declare flick function
//  if state is true
//    -set body class to off
//    -set bulb classes to bulb off
//    -set state to false
//  else
//    -set body class to on
//    -set bulb classes to bulb off
//    -set state to true
// add EventListener to listen for clicks on the bulb and to execute the
// flick function when click detected

var $body = document.querySelector('body');
var $bulb = document.querySelector('.bulb.off');
var state = false;

function flick(event) {
  if (state) {
    $body.className = 'off';
    $bulb.className = 'bulb off';
    state = false;
  } else {
    $body.className = 'on';
    $bulb.className = 'bulb on';
    state = true;
  }
}

$bulb.addEventListener('click', flick);
