var student = {
  firstName: 'Ryan',
  lastName: 'Zhao',
  age: 23
};
student.fullName = student.firstName + ' ' + student.lastName;
student.livesInIrvine = false;
student.previousOccupation = 'cashier';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);
var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2017
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('Vehicle color:', vehicle['color']);
console.log('Vehicle convertible?:', vehicle['isConvertible']);
console.log('Vehicle:', vehicle);
var pet = {
  name: 'Bongwater',
  type: 'beagle'
};
delete pet.name;
delete pet.type;
console.log('Pet:', pet);
