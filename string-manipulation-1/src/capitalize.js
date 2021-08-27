/* exported capitalize */

// capitalize
// input: string containing a single word
// output: string of the word with first character uppercase and the rest lowercase

// PSEUDOCODE
// create storage for output
// make first character uppercase and append to output
// inspect each other character
//  -turn each letter to lowercase and append to output
// return output

function capitalize(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}
