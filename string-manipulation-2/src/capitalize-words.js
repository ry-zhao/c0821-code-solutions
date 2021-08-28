/* exported capitalizeWords */
// input: String
// output: String with every word capitalized

// PSEUDOCODE
// create storage for output
// capitalize first letter and append to output
// traverse characters starting from second letter
//  -check if current character is a space
//    -if so, change character to the right to uppercase and append with a space to output
//      -increment the counter
//    -else, change current character to lowercase and append to output
// return output

function capitalizeWords(string) {
  var output = '';
  output += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      output += ' ' + string[i + 1].toUpperCase();
      i++;
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}
