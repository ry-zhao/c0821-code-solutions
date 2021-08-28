/* exported drop */
// drop
// input: Array, Number count of items to drop
// output: Array with first x (count) items dropped

// PSEUDOCODE
// create storage for output
// traverse array starting from count to end
//  -append item to array
// return output

function drop(array, number) {
  var output = [];
  for (var i = number; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
