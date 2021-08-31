/* exported swapChars */
// swapChars
// input: Numbers firstIndex, lastIndex, String
// output: String with chars at indices reversed

// PSEUDOCODE
// create storage for output
// create storage for array
// traverse string from left to right
//  -append chars to array
// assign array at secondIndex value of string at firstIndex
// assign array at firstIndex value of string at secondIndex
// traverse array
//  -append char to output
// return output

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  var temp = [];
  for (var i = 0; i < string.length; i++) {
    temp.push(string[i]);
  }
  temp[firstIndex] = string[secondIndex];
  temp[secondIndex] = string[firstIndex];
  for (var j = 0; j < temp.length; j++) {
    output += temp[j];
  }
  return output;
}
