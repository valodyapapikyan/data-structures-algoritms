import { PriorityQueue } from './data-structures/PriorityQueue/index';
import { Queue } from './data-structures/Queue/index';
import { Stack } from './data-structures/Stack/index';
import { LinkedList } from './data-structures/LinkedList/index';
import { DoblyLinkedList } from './data-structures/DoublyLinkedList/index';

(function () {
  const linkedList = new LinkedList();
  const doublyLinkedList = new DoblyLinkedList();
  const stack = new Stack();
  const queue = new Queue();

  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue(7); //
  priorityQueue.enqueue(4);
  priorityQueue.enqueue(8); //
  priorityQueue.enqueue(5); //
  priorityQueue.enqueue(3);
  priorityQueue.enqueue(6); //
  priorityQueue.enqueue(-45);

  priorityQueue.dequeue();
  priorityQueue.dequeue();
  priorityQueue.dequeue();
  priorityQueue.dequeue();

  console.log('count = ', priorityQueue.getCount());

  console.log('first', priorityQueue.first());

  console.log('last', priorityQueue.rear());

  for (let item of priorityQueue) {
    console.log('items', item);
  }
  // queue.enque("1-1");
  // queue.enque("2-2");
  // queue.enque("3-3")

  for (let item of queue) {
    // console.log(item)
  }
  // stack.push(1);
  // stack.push(2);

  // stack.push(3);
  // stack.push(4);

  //   // console.log('after',stack)

  // console.log('peak', stack.peak());
  //   console.log('pop', stack.pop());

  //   console.log('before', stack);

  doublyLinkedList.addFirst(1);
  doublyLinkedList.addFirst(2);

  for (let item of doublyLinkedList) {
    // console.log(item)
  }
  //   doublyLinkedList.addFirst(4);
  //   doublyLinkedList.addFirst(3);
  //   doublyLinkedList.addFirst(2);
  //   doublyLinkedList.addLast(5);

  //   doublyLinkedList.removeFisrt()
  //   doublyLinkedList.removeLast()
  //   console.log('search', doublyLinkedList.search(5));

  //   console.log('doub', doublyLinkedList.traverse());

  // linkedList.insertFirst(1);
  // linkedList.insertFirst(2);
  // linkedList.insertFirst(3);
  // linkedList.insertFirst(4);
  // linkedList.insertFirst(5);
  // linkedList.insertFirst(6);
  // linkedList.insertFirst(7);

  // linkedList.deleteFirst()
  // linkedList.deleteLast()

  // console.log("find :", linkedList.search(4))

  // console.log('size : ', linkedList.size())
  // console.log(linkedList.traverse())
})();
