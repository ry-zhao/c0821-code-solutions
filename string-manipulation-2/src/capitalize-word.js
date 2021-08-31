/* exported capitalizeWord */
// capitalizeWord
// input: String containing single word
// output: capitalized String, with the exception of JavaScript

// PSEUDOCODE
// create storage for output
// append first letter of input capitalized to output
// traverse all other characters of input
//  -make each chracter lowercase and append to output
// check if output's value is 'javascript'
//  -if so, return 'JavaScript'
//  -else, return output

function capitalizeWord(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  if (output === 'Javascript') {
    return 'JavaScript';
  } else {
    return output;
  }
}
