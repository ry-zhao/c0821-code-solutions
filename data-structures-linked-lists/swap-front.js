/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const second = list;
  const first = list.next;
  second.next = first.next;
  first.next = second;
  return first;
}
