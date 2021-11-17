/* exported getTail */

function getTail(list) {
  let item = list;
  while (item.next !== null) {
    item = item.next;
  }
  return item.data;
}
