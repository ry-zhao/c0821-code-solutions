/* exported getLength */

function getLength(list) {
  let count = 1;
  let next = list.next;
  while (next !== null) {
    next = next.next;
    count++;
  }
  return count;
}
