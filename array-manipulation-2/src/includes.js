/* exported includes */
// includes
// input: Array, value to search for
// output: Boolean indicating whether value is present in array

// PSEUDOCODE
// traverse array from start to end
//  -check if item matches value
//    -if so, return true
// return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
