/* exported ransomCase */
// ransomCase
// input: String
// output: same String but every other character is uppercase

// PSEUDOCODE
// create storage for output
// traverse every character in the string
//   check if index modulo two is zero
//    -if so, append character lowercased to output
//    -else, append character uppercased to output
// return output

function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase();
    } else {
      output += string[i].toUpperCase();
    }
  }
  return output;
}
