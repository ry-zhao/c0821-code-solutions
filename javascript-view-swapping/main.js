var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function updateTabContainer(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabList.length; i++) {
    if ($tabList[i] === event.target) {
      $tabList[i].className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }
  for (var j = 0; j < $viewList.length; j++) {
    if (event.target.getAttribute('data-view') === $viewList[j].getAttribute('data-view')) {
      $viewList[j].setAttribute('class', 'view');
    } else {
      $viewList[j].setAttribute('class', 'view hidden');
    }
  }
}

$tabContainer.addEventListener('click', updateTabContainer);
