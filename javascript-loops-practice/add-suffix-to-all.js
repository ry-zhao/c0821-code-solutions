/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    newWords[i] = words[i] + suffix;
  }
  return newWords;
}
