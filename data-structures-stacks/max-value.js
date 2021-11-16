/* exported maxValue */

function maxValue(stack) {
  let max;
  max = stack.pop();
  if (max === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const top = stack.pop();
    if (top > max) {
      max = top;
    }
  }
  return max;
}
