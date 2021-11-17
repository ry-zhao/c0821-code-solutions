/* exported includes */

function includes(list, value) {
  let node = list;
  while (node.data !== value) {
    node = node.next;
    if (node === null) {
      return false;
    }
  }
  return true;
}
