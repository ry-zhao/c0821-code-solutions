var $button = document.querySelector('.hot-button');
var $count = document.querySelector('.click-count');
var counter = 0;

function handleClick(event) {
  counter++;
  if (counter < 4) {
    $button.className = 'hot-button cold';
  } else if (counter < 7) {
    $button.className = 'hot-button cool';
  } else if (counter < 10) {
    $button.className = 'hot-button tepid';
  } else if (counter < 13) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
  $count.textContent = 'Clicks: ' + counter;
}

$button.addEventListener('click', handleClick);
