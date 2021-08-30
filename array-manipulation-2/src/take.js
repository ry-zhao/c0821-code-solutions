/* exported take */
// take
// input: Array, Number count
// output: Array with first x (count) elements

// PSEUDOCODE
// create storage for output
// check if count exceeds array length
//  -return array
// traverse through array until count reached
//  -append item to output
// return output

function take(array, count) {
  var output = [];
  if (count > array.length) {
    return array;
  }
  for (var j = 0; j < count; j++) {
    output.push(array[j]);
  }
  return output;
}
