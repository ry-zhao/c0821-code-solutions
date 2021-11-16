/* exported takeSmaller */

function takeSmaller(queue) {
  if (isEmpty(queue)) return;
  const first = queue.dequeue();
  if (isEmpty(queue)) return first;
  const second = queue.dequeue();
  const results = first < second ? [first, second] : [second, first];
  queue.enqueue(results[1]);
  return results[0];
}
