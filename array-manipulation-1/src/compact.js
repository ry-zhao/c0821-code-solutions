/* exported compact */
// compact
// input: array of elements
// output: same array but without falsy elements

// PSEUDOCODE
// create storage for output
// starting from the first, inspect every item
//  if the item is truthy
//    -append it to output
// return output

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}
