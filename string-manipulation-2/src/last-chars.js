/* exported lastChars */
// lastChars
// input: Number length, String
// output: String made up of last x (length) characters

// PSEUDOCODE
// check if length is longer than String length
//  -if so, return string
// create storage for output
// create new value (left) of String length minus length
// check each char starting from left to end
//  -append character to output
// return output

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var output = '';
  var left = string.length - length;
  for (var i = left; i < string.length; i++) {
    output += string[i];
  }
  return output;
}
