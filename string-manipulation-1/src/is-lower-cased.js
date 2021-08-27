/* exported isLowerCased */
// isLowerCased
// input: string containing a word
// output: Boolean indicating whether or not all letters are lowercase

// PSEUDOCODE
// inspect each character
//  -if letter is lowercase
//    -if not, return false
//  return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
