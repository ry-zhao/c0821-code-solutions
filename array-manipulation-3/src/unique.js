/* exported unique */
//  unique
//  input: Array array
//  output: Array containing only the unique elements of array

//  PSEUDOCODE
//  create storage for output
//  create and store Object counter
//  traverse array
//    if element doesn't exist in counter
//      append element to counter with value true
//      push element to output
//  return output

function unique(array) {
  var output = [];
  var counter = {};
  for (var i = 0; i < array.length; i++) {
    if (!counter[array[i]]) {
      counter[array[i]] = true;
      output.push(array[i]);
    }
  }
  return output;
}
