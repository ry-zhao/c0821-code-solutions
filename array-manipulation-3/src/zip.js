/* exported zip */
//  zip
//  input: Arrays first and second
//  output: Array of Arrays with each subArray containing an element from first and second
//  from the same index

//  PSEUDOCODE
//  declare var length
//  check if first is longer than second
//    if so, assign length of second to length
//  else,
//    assign length of first to length
//  create storage for output
//  traverse arrays
//    create and store new array temp
//    push element from first to temp
//    push element from second to temp
//    push temp to output
//  return output

function zip(first, second) {
  var length;
  if (first.length > second.length) {
    length = second.length;
  } else {
    length = first.length;
  }
  var output = [];
  for (var i = 0; i < length; i++) {
    var temp = [];
    temp.push(first[i]);
    temp.push(second[i]);
    output.push(temp);
  }
  return output;
}
