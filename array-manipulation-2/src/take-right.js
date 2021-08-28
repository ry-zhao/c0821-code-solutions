/* exported takeRight */
// takeRight
// input: Array array, Number count
// output: Array of x (count) elements from the end of the Array

// PSEUDOCODE
// create storage for output
// check if length is longer than array length
//  -if so, traverse array
//    -append element to output
//  -return output
// create and store new value left (array.length - count)
// traverse array from left to end
//  -append value to output
// return output

function takeRight(array, count) {
  var output = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      output.push(array[i]);
    }
    return output;
  }
  var left = array.length - count;
  for (var j = left; j < array.length; j++) {
    output.push(array[j]);
  }
  return output;
}
