/* exported firstChars */
// firstChars
// input: length, String
// output: String made up of first x (length) characters of input

// PSEUDOCODE
// check if length is longer than string length
//  -if so, return string
// create storage for output
// traverse string from start to length
//  -append character to output
// return output

function firstChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var output = '';
  for (var i = 0; i < length; i++) {
    output += string[i];
  }
  return output;
}
