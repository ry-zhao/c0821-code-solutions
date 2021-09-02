/* exported difference */

//  difference
//  input: Arrays first and second
//  output: Array containing symmetric difference

//  PSEUDOCODE:
//  create storage for output
//  traverse first array
//    traverse second array
//      check if element of first array is equal to element
//        if so, break
//      if not, append element of first array to output
//  traverse second array
//    traverse first array
//      check if element exists in unique OR of second array is equal to element
//        if so, break
//      if not, append element of second array to output
//  return output

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] !== second[j]) {
        output.push(first[i]);
      }
    }
  }
  return output;
}
