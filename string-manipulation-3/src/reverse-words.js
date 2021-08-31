/* exported reverseWords */
// reverseWords
// input: String string
// output: String with each char of every word reversed, but the words in
// original order

// PSEUDOCODE
// create storage for Array temp
// create storage for output
// create storage for word
// check each character
//  -if character is space
//    -append word to temp
//    -reset word value
//  -else append character to word
// append word to temp
// traverse array
//  -traverse word by char from end to start
//    -append to output
//  -check if item in array is last
//    -if not, append space to output
// return output

function reverseWords(string) {
  var temp = [];
  var output = '';
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      temp.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  temp.push(word);
  for (var j = 0; j < temp.length; j++) {
    for (var k = temp[j].length - 1; k >= 0; k--) {
      output += temp[j][k];
    }
    if (j !== temp.length - 1) {
      output += ' ';
    }
  }
  return output;
}
