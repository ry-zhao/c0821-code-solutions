/* exported getValues */
// getValues
// input: Object object
// output: array of object's property values

// PSEUDOCODE
// create storage for output
// go through all keys in object
//  append values of key properties to output
// return output

function getValues(object) {
  var output = [];
  for (var key in object) {
    output.push(object[key]);
  }
  return output;
}
