/* exported difference */

//  difference
//  input: Arrays first and second
//  output: Array containing symmetric difference

//  PSEUDOCODE:
//  create storage for output
//  traverse first array
//    create and store Boolean isDifferent and set to true
//    traverse second array
//      if element of first array equals element
//        set isDifferent to false
//        break
//    if isDifferent is true
//      append to output
//  traverse second array
//    repeat the same as above but with arrays switched
//  return output

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    var isDifferentFromSecond = true;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        isDifferentFromSecond = false;
        break;
      }
    }
    if (isDifferentFromSecond === true) {
      output.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    var isDifferentFromFirst = true;
    for (var l = 0; l < first.length; l++) {
      if (second[k] === first[l]) {
        isDifferentFromFirst = false;
        break;
      }
    }
    if (isDifferentFromFirst === true) {
      output.push(second[k]);
    }
  }
  return output;
}
