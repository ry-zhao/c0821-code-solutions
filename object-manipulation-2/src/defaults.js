/* exported defaults */
// defaults
// input: Object target, Object source
// output: undefined, but modifies target so that all properties that were not
// defined in target but source are specified

// PSEUDOCODE
// traverse source
//  -check if property exists in target
//    -if not, append it to target

function defaults(target, source) {
  for (var k in source) {
    if (target[k] === undefined) {
      target[k] = source[k];
    }
  }
}
