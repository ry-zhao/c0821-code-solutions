var $open = document.querySelector('.open');
var $dimmer = document.querySelector('.dimmer');
var $container = document.querySelector('.container');
var $no = document.querySelector('.no');

function display() {
  $dimmer.className = 'dimmer';
  $container.className = 'container';
}

function close() {
  $dimmer.className = 'dimmer none';
  $container.className = 'container none';
}

$open.addEventListener('click', display);
$no.addEventListener('click', close);
