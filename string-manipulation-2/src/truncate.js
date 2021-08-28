/* exported truncate */
// truncate
// input: Number length and String string
// output: A shortened version of string, plus in an ellipsis

// PSEUDOCODE
// create storage for output
// check if passed length is longer than string length
// if so return string appeneded with ellipsis
// go through every character in the string until passed length reached
//  -append character onto output
// append ellipsis
// return output

function truncate(length, string) {
  var output = '';
  if (length > string.length) {
    return string + '...';
  }
  for (var i = 0; i < length; i++) {
    output += string[i];
  }
  output += '...';
  return output;
}
