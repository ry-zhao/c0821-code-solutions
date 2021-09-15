function ExampleConstructor() {}

console.log('prototype of ExampleConsturctor:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof ExampleConstructor);

var ex = new ExampleConstructor();

console.log('value of ex:', ex);

var isInstanceOfEC = ex instanceof ExampleConstructor;

console.log('ex is instance of ExampleConstructor:', isInstanceOfEC);
