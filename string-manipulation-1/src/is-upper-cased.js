/* exported isUpperCased */
// isUpperCased
// input: string containing a single word
// output: Boolean indicating whether or not all characters are uppercase

// PSEUDOCODE
// inspect each character
//   -if letter is uppercase
//    -if not, return false
// return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
