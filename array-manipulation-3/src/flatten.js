/* exported flatten */
//  flatten
//  input: Array array
//  output: new Array with any direct child Arrays unwrapped

//  PSEUDOCODE
//  create storage for output
//  traverse array
//    check if element is Array
//      if so, traverse element
//        append element to output
//      else,
//        append element to output
//  return output

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
