/* exported equal */
//  equal
//  input: Arrays first, second
//  output: Boolean indicating whether the arrays are identical

//  PSEUDOCODE
//  check if lengths of first and second are not equal
//    if so, return false
//  traverse first
//    check if element is not equal to corresponding element in second
//      if so, return false
//  return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
