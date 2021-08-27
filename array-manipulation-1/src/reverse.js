/* exported reverse */
// reverse
// input: array of elements
// output: array with same elements but in reverse order

// PSEUDOCODE
// create storage for output
// traverse items from last to first
//  -append item to output
// return output

function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
