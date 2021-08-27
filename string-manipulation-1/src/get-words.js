/* exported getWords */
// getWords
// input: string containing zero or more words, separated by spaces
// output: Array of strings containing each word at index

// PSEUDOCODE
// create storage for output
// create storage for word
// check if string is empty
//  -return output if so
// check each character
//  -if character is space
//    -append word to output
//    -reset word value
//  -else append character to word
// append word to output
// return output

function getWords(string) {
  var output = [];
  var word = '';
  if (string === '') {
    return output;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  output.push(word);
  return output;
}
