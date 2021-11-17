/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let item = list;
  while (item.next !== null) {
    item = item.next;
  }
  item.next = new LinkedList(value);
}
