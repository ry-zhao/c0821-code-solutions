/* exported take2nd */

function take2nd(queue) {
  postpone(queue);
  return queue.dequeue();
}
