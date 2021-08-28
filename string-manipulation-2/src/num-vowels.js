/* exported numVowels */
// numVowels
// input: String
// output: Number of vowels in passed String

// PSEUDOCODE
// create storage for output
// traverse every character in String
//  -change character to lowercase and check if vowel
//    -if so, increment output
//      -break
//    -if not, break
// return output

function numVowels(string) {
  var output = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        output++;
        break;
      default:
        break;
    }
  }
  return output;
}
