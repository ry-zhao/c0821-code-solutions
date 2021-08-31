/* exported titleCase */
// titleCase
// input: String title
// output: String containing title capitalized APA Style

// PSEUDOCODE
// create storage for Array wordList
// create storage for word
// create storage for Boolean afterColon
// create Array minorWords
// create storage for output

// check each character in title
//  -check if char is space
//    -if so, push word to wordList
//    -reset word
//  -else check if char is '-'
//    -append '-' + capitalized next char
//  -else
//    -append lowercased char to word
// push word to wordList

// check if first word in wordList is javascript
//  -if so, append 'JavaScript'
// else, check if it's 'javascript:'
//  -if so, append 'JavaScript:'
//  -set afterColon to true
// else, check if it's 'api'
//  -if so, append 'API'
// else, check if it's 'api:'
//  -if so, append 'API:'
//  -set afterColon to true
// else,
//  -append first char capitalized to output
//  -traverse rest of word
//    -append char to output

// traverse wordList starting from index 1
//  -check if first word in wordList is javascript
//    -if so, append 'JavaScript'
//  -else, check if it's 'javascript:'
//    -if so, append 'JavaScript:'
//    -set afterColon to true
//  -else, check if it's 'api'
//    -if so, append 'API'
//  -else, check if it's 'api:'
//    -if so, append 'API:'
//    -set afterColon to true
//  -else check if afterColon is true
//    -if so, append first char capitalized to output
//    -traverse rest of word
//      -append char to output
//    -else,
//      -set it to false
//  -else, check if word is shorter than 4 char
//    -if so, traverse minorWords
//      -check if word is equal to minorWords[x]
//        -if so, append word to output
//    -else,
//      -append capitalized first char to output
//      -traverse rest of the word
//        -append char to output
//  -else,
//    -append capitalized first char to output
//    -traverse rest of the word
//      -append char to output
//  -check if index is last
//    -if not, append space
//    -check if last char is ':'
//      -if so, set afterColon to true
//    -else,
//      -set afterColon to false
// return output

function titleCase(title) {
  var wordList = [];
  var word = '';
  var afterColon = false;
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by',
    'for', 'in', 'of', 'on', 'per', 'to'];
  var output = '';
}
