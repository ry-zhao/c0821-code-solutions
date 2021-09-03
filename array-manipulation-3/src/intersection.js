/* exported intersection */
//  intersection
//  input: Arrays first, second
//  output: Array containing intersection

//  PSEUDOCODE
//  create storage for output
//  traverse first
//    check if element appears in second
//      if so, append to output
//  return output

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      output.push(first[i]);
    }
  }
  return output;
}
