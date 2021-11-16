/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let item = queue.dequeue();
  while (item > queue.peek()) {
    queue.enqueue(item);
    item = queue.dequeue();
  }
  return item;
}
