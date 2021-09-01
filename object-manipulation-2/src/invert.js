/* exported invert */
// invert
// input: Object source
// output: Object with properties and values inverted

// PSEUDOCODE:
// create storage for output
// traverse source
//  -assign source value as property and property as value in output
// return output

function invert(source) {
  var output = {};
  for (var k in source) {
    output[source[k]] = k;
  }
  return output;
}
