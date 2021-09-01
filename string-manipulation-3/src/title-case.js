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
//    -increment counter by 1
//  -else
//    -append lowercased char to word
// push word to wordList

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
//  -else, check if word is first
//    -if so, append capitalized first char to output
//    -traverse rest of word
//      -append chars to output
//  -else, check if word is shorter than 4 char
//    -if so, traverse minorWords
//      -check if word is equal to minorWords[x]
//        -if so, append word to output
//        -check if item is last, if so
//          -append capitalized first char to output
//          -traverse rest of the word
//          -append char to output
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
  for (var i = 0; i < title.length; i++) {
    if (title[i] === ' ') {
      wordList.push(word);
      word = '';
    } else if (title[i] === '-') {
      word += '-' + title[i + 1].toUpperCase();
      i++;
    } else {
      word += title[i].toLowerCase();
    }
  }
  wordList.push(word);
  for (var x = 0; x < wordList.length; x++) {
    if (wordList[x] === 'javascript') {
      output += 'JavaScript';
    } else if (wordList[x] === 'javascript:') {
      output += 'JavaScript:';
      afterColon = true;
    } else if (wordList[x] === 'api') {
      output += 'API';
    } else if (wordList[x] === 'api:') {
      output += 'API:';
      afterColon = true;
    } else if (afterColon === true) {
      output += wordList[x][0].toUpperCase();
      for (var y = 1; y < wordList[x].length; y++) {
        output += wordList[x][y];
      }
    } else if (x === 0) {
      output += wordList[0][0].toUpperCase();
      for (var c = 1; c < wordList[0].length; c++) {
        output += wordList[0][c];
      }
    } else if (wordList[x].length < 4) {
      for (var z = 0; z < minorWords.length; z++) {
        if (wordList[x] === minorWords[z]) {
          output += wordList[x];
          break;
        }
        if (z === minorWords.length - 1) {
          output += wordList[x][0].toUpperCase();
          for (var a = 1; a < wordList[x].length; a++) {
            output += wordList[x][a];
          }
        }
      }
    } else {
      output += wordList[x][0].toUpperCase();
      for (var b = 1; b < wordList[x].length; b++) {
        output += wordList[x][b];
      }
    }
    if (x !== wordList.length - 1) {
      output += ' ';
      if (wordList[x][wordList[x].length - 1] === ':') {
        afterColon = true;
      } else {
        afterColon = false;
      }
    }
  }
  return output;
}
