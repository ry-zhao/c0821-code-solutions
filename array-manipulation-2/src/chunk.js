/* exported chunk */
// chunk
// input: Array array, Number size
// output: New Array of elements organized into sub-arrays of size elements

// PSEUDOCODE
// create storage for output
// check if array.length is zero
//  -return output
// traverse array from start to end, incrementing by size
//  check if index + size is within length
//    -if so, create storage for sub-array
//    -traverse from index to index + size
//      -append element to sub-array
//    -append sub-array to output
//    -if not, create storage for sub-array
//    -traverse elements from index to end
//      -append element to sub-array
//    -append sub-array to output
// return output

function chunk(array, size) {
  var output = [];
  if (array.length === 0) {
    return output;
  }
  for (var i = 0; i < array.length; i += size) {
    if (i + size < array.length) {
      var sub = [];
      for (var j = i; j < i + size; j++) {
        sub.push(array[j]);
      }
      output.push(sub);
    } else {
      var last = [];
      for (var k = i; k < array.length; k++) {
        last.push(array[k]);
      }
      output.push(last);
    }
  }
  return output;
}
