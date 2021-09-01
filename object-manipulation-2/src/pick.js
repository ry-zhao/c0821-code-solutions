/* exported pick */
// input: Object source, String keys
// output: Object containing all properties of source listed in keys

// PSEUDOCODE
// create storage for output
// traverse keys
//  check if key is present as property in source
//    -if so, add property and value to output
// return output

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
