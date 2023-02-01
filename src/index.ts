import { binarySearch } from './algoritms/search/binary-search';
import { PriorityQueue } from './data-structures/PriorityQueue/index';
import { Queue } from './data-structures/Queue/index';
import { Stack } from './data-structures/Stack/index';
import { LinkedList } from './data-structures/LinkedList/index';
import { DoblyLinkedList } from './data-structures/DoublyLinkedList/index';
import { HashTable } from './data-structures/HashTable/index';

(function () {
  const linkedList = new LinkedList();
  const doublyLinkedList = new DoblyLinkedList();
  const stack = new Stack();
  const queue = new Queue();

  const hashTable = new HashTable();

  // function sleep() {
  //   return new Promise(resolve => setTimeout(resolve, 4000));
  // };

  console.log(hashTable.add('valodya', 7));
  console.log(hashTable.add('gag', 888887));
  console.log(hashTable.add('gag', 888887));

  console.log(hashTable.add('gag', 888887));

  console.log(hashTable.add('gag', 90909000009));

  console.log('after insert', hashTable.getValues());

  // await sleep();
  hashTable.delete('gag');

  console.log('after delete', hashTable.getValues());

  console.log('GET function : ', hashTable.get('valodya'));

  console.log('HAS function : ', hashTable.has('valodyaa'));

  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue(7); //
  priorityQueue.enqueue(4);
  priorityQueue.enqueue(8); //
  priorityQueue.enqueue(5); //
  // priorityQueue.enqueue(3);
  // priorityQueue.enqueue(6); //
  // priorityQueue.enqueue(-45);

  priorityQueue.dequeue();
  priorityQueue.dequeue();
  priorityQueue.dequeue();
  priorityQueue.dequeue();

  // console.log('count = ', priorityQueue.getCount());

  // console.log('first', priorityQueue.first());

  // console.log('last', priorityQueue.rear());

  //EXAMPLE OF  COMPARATOR FUNCTION
  const comparatorCallBack = function (obj: any, obj1: any) {
    if (obj.value === obj1.value) {
      return 0;
    }
    if (obj.value < obj1.value) {
      return -1;
    }
    if (obj.value > obj1.value) {
      return 1;
    }
  };

  //WITH COMPARATOR
  // console.log(
  //   binarySearch(
  //     [{ value: 0 }, { value: 1 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }],
  //     { value: 4 },
  //     comparatorCallBack
  //   )
  // );

  //WITHOUT COMPARATOR
  // console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

  for (const item of priorityQueue) {
    // console.log('items', item);
  }
  // queue.enque("1-1");
  // queue.enque("2-2");
  // queue.enque("3-3")

  for (const item of queue) {
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

  // doublyLinkedList.addFirst(1);
  // doublyLinkedList.addFirst(2);

  for (const item of doublyLinkedList) {
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
