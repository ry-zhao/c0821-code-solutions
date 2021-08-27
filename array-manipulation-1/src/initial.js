/* exported initial */
// initial
// input: array
// output: array of all elements except the last

// PSEUDOCODE
// create storage for output
// traverse every item in array until second to last
//  -add item to output
// return output

function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
