/* exported take */
// take
// input: Array, Number count
// output: Array with first x (count) elements

// PSEUDOCODE
// create storage for output
// check if count exceeds array length
//  -traverse array from start to end
//    -push element to output
//  -return output
// traverse through array until count reached
//  -append item to output
// return output

function take(array, count) {
  var output = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      output.push(array[i]);
    }
    return output;
  }
  for (var j = 0; j < count; j++) {
    output.push(array[j]);
  }
  return output;
}
