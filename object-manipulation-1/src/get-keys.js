/* exported getKeys */
// getKeys
// input: Object object
// output: Array of object's property keys

// PSEUDOCODE
// create storage for output
// for all keys in object
//  -append key to output
// return output

function getKeys(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
}
