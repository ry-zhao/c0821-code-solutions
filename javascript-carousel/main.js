var $box = document.querySelector('.box');
var $imageContainer = document.querySelector('.image-container');
var $buttonContainer = document.querySelector('.button-container');
var current = 0;
var intervalID = setInterval(rotateImages, 3000);

function changeImage(event) {
  if (!event.target.matches('.button')) {
    return;
  }
  current = parseInt(event.target.getAttribute('data-index'));
  switchImage();
  resetInterval();
}

function lastImage() {
  if (current === 0) {
    current = 4;
  } else {
    current--;
  }
  switchImage();
  resetInterval();
}

function nextImage() {
  if (current === 4) {
    current = 0;
  } else {
    current++;
  }
  switchImage();
  resetInterval();
}

function rotateImages() {
  if (current === 4) {
    current = 0;
  } else {
    current++;
  }
  switchImage();
}

function switchImage() {
  for (var i = 0; i < $buttonContainer.children.length; i++) {
    if (i === current) {
      $buttonContainer.children[i].className = 'button current';
      $imageContainer.children[i].className = '';
    } else {
      $buttonContainer.children[i].className = 'button';
      $imageContainer.children[i].className = 'hidden';
    }
  }
}

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(rotateImages, 3000);
}

function goBackOrForth(event) {
  if (!event.target.matches('i')) {
    return;
  }
  if (event.target.matches('.fa-chevron-left')) {
    lastImage();
  } else {
    nextImage();
  }
}

$buttonContainer.addEventListener('click', changeImage);
$box.addEventListener('click', goBackOrForth);
