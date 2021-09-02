var $taskList = document.querySelector('.task-list');

function logTargetAndName(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('.task-list-item element:', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', logTargetAndName);
