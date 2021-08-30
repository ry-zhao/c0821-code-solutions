/* exported isPalindromic */
// isPalindromic
// input: String string
// output: Boolean indicating whether string is a palindrome

// PSEUDOCODE
// create and store new empty string forwards
// create and store new empty string backwards
// traverse string from start to end
//  -if char is not space
//    -append to forwards
// traverse string from end to start
//  -if char is not space
//  -append to backwards
// check if forwards is equal to backwards
//  if so, return true
//  else, return false

function isPalindromic(string) {
  var forwards = '';
  var backwards = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      forwards += string[i];
    }
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      backwards += string[j];
    }
  }
  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
}
