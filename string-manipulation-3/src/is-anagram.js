/* exported isAnagram */
// isAnagram
// input: String firstString, String, secondString
// output: Boolean indicating whether or not strings are anagrams

// PSEUDOCODE
// declare counter and assign empty object to counter variable
// traverse firstString
//   - check if char is space
//    -if not, check if char exists as a property in counter
//       -if so, increment value by 1
//         -if not, declare property and assign 1
// traverse secondString
//   - check if char is space
//     -if not, check if char exists as a property in object
//       -if so, decrement value by 1
//         -if not, return false
// traverse counterOne properties
//   - check if each property is 0
//     -if not return false
// return true

function isAnagram(firstString, secondString) {
  var counter = {};
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      if (counter[firstString[i]]) {
        counter[firstString[i]]++;
      } else {
        counter[firstString[i]] = 1;
      }
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      if (counter[secondString[j]]) {
        counter[secondString[j]]--;
      } else {
        return false;
      }
    }
  }
  for (var key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
}
