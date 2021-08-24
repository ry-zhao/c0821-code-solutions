function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5) Result:', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey, ' + name;
}
console.log('greet(\'Cody\') Result:', greet('Cody'));
function getArea(width, length) {
  return width * length;
}
console.log('getArea(4, 12) result:', getArea(4, 12));
var person = {
  firstName: 'Ryan',
  lastName: 'Zhao'
};
function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName(person) result:', getFirstName(person));
var a = ['stuff', 'item', 'entry', 'last'];
function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElement(a) result:', getLastElement(a));
