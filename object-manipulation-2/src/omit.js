/* exported omit */
// omit
// input: Object source, Array keys
// output: Object with properties listed in keys deleted

// PSEUDOCODE
// create storage for output
// traverse properties in object
//  -add property-value pair to output
// traverse keys
//  -check if key exists in output
//    -if so, delete property
// return output

function omit(source, keys) {
  var output = {};
  for (var p in source) {
    output[p] = source[p];
  }
  for (var i = 0; i < keys.length; i++) {
    if (output[keys[i]] !== undefined) {
      delete output[keys[i]];
    }
  }
  return output;
}
