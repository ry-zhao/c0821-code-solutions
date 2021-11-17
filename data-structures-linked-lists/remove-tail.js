/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let item = list;
  while (item.next.next !== null) {
    item = item.next;
  }
  item.next = null;
}
