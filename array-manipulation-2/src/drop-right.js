/* exported dropRight */
// dropRight
// input: Array array, Number count
// output: Array with last x (count) elements excluded

// PSEUDOCODE
// create storage for output
// check if count is greater than array.length
//  -if so, traverse array elements
//    -append element to output
//  -return output
// create and store new Number value right (array.length - count)
// traverse array from start to right
//  -append element to output
// return output

function dropRight(array, count) {
  var output = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      output.push(array[i]);
    }
    return output;
  }
  var right = array.length - count;
  for (var j = 0; j < right; j++) {
    output.push(array[j]);
  }
  return output;
}
