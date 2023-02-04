import { Node } from '../doubly-linked-lits/node';
import { IQueue } from '../../interfaces/queue/index';
import { DoblyLinkedList } from '../doubly-linked-lits/index';

export class Queue<T> implements IQueue<T> {
  queueContainer: DoblyLinkedList<T>;
  count: number;

  constructor() {
    this.queueContainer = new DoblyLinkedList();
    this.count = 0;
  }

  /**
   * Add an item to the queue
   * Time complexity: O(1)
   * @param {T} element
   */
  enqueue(element: T): void {
    this.queueContainer.addLast(element);
    this.count++;
  }

  /**
   * remove an item to the queue
   * Time complexity: O(1)
   */
  dequeue(): Node<T> {
    const head = this.queueContainer.head;
    this.queueContainer.removeFisrt();
    this.count--;
    return head;
  }

  /**
   * Return firts element
   */
  first(): Node<T> {
    return this.queueContainer.head;
  }

  /**
   * Return last element
   */
  rear(): Node<T> {
    return this.queueContainer.tail;
  }

  isEmpty(): boolean {
    return 0 === this.count;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.queueContainer[Symbol.iterator]();
  }
}
