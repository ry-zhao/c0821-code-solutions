/* exported isVowel */
// isVowel
// input: string of a single char
// output: Boolean indicating whether or not char was a vowel

// PSEUDOCODE
// turn input to lowercase
// inspect if letter is a, e, i, o, or u
//  -if so return true
//  -if not return false

function isVowel(character) {
  var char = character.toLowerCase();
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
