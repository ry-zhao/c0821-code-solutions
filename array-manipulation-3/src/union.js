/* exported union */

//  union
//  input: Arrays first, second
//  output: Array with union of two inputs

//  PSEUDOCODE
//  create storage for output
//  traverse first array
//    push element to output
//  traverse second array
//    check if element exists in output
//      if not, push element to output
//  return output

function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    output.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (output.indexOf(second[j]) === -1) {
      output.push(second[j]);
    }
  }
  return output;
}
