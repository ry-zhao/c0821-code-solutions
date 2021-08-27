/* exported tail */
// tail
// input: array of elements
// output: array of all elements after the first

// PSEUDOCODE
// create storage for output
// traverse every item in array starting from second
//  -add item to output
// return output

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
