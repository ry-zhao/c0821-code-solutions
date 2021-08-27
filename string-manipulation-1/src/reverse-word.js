/* exported reverseWord */
// reverseWord
// input: string containing one word
// output: string containing that word reversed

// PSEUDOCODE
// create storage for output
// starting from the last character until the first
//  -add letter to output
// return output

function reverseWord(word) {
  var output = '';
  for (var i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  return output;
}
