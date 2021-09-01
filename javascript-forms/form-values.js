var $contactForm = document.querySelector('form');

function handleSubmission(event) {
  event.preventDefault();
  var submission = {};
  for (var i = 0; i < $contactForm.elements.length - 1; i++) {
    submission[$contactForm.elements[i].name] = $contactForm.elements[i].value;
  }
  console.log('Message data:', submission);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmission);
