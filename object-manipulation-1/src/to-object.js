/* exported toObject */
// toObject
// input: Array containing two elements, one String and any JS value
// output: Object with one property consisting of the passed pair in the Array

// PSEUDOCODE
// create storage for output Object
// assign passed key-value pair as a property of Object and its value respectively
// pass output

function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}
