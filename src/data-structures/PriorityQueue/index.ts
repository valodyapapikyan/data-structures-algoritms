import { Comparator } from './../../utils/Comparator';
import { IQueue } from './../../interfaces/queue/index';
import { DoblyLinkedList } from '../DoublyLinkedList/index';
import { Node } from '../DoublyLinkedList/node';

export class PriorityQueue<T> implements IQueue<T> {
  count: number;
  queueContainer: DoblyLinkedList<T>;

  constructor() {
    this.count = 0;
    this.queueContainer = new DoblyLinkedList();
  }

  /**
   * Add an item to the queue
   * Time complexity: O(n)
   * @param {T} element
   */
  enqueue(element: T): void {
    const node = new Node(element);

    if (this.queueContainer.head === null) {
      this.queueContainer.addFirst(element);
    } else if (new Comparator().lessThan(this.queueContainer.head.value, element)) {
      node.nextPointer = this.queueContainer.first();
      this.queueContainer.first().previousPointer = node;
      this.queueContainer.head = node;
    } else if (new Comparator().greatherThan(this.queueContainer.tail.value, element)) {
      node.previousPointer = this.queueContainer.tail;
      this.queueContainer.tail.nextPointer = node;
      this.queueContainer.tail = node;
    } else {
      let temp = this.queueContainer.first();

      while (new Comparator().greatherThan(temp.value, element)) {
        temp = temp.nextPointer;
      }

      node.nextPointer = temp;
      node.previousPointer = temp.previousPointer;
      temp.previousPointer = node;

      if (node.previousPointer) {
        node.previousPointer.nextPointer = node;
      }
    }
    this.count++;
  }

  /**
   * Add an item to the queue
   * Time complexity: O(1)
   * @param {T} element
   */
  dequeue(): Node<T> {
    if (this.isEmpty()) {
      return null;
    }

    const data = this.first();

    if (new Comparator().isEqual(this.queueContainer.head.value, this.queueContainer.tail.value)) {
      this.queueContainer.head = null;
      this.queueContainer.tail = null;
    } else {
      this.queueContainer.head = this.queueContainer.head.nextPointer;
      this.queueContainer.head.previousPointer = null;
    }

    this.count--;
    return data;
  }

  /**
   * Add an item to the queue
   * Time complexity: O(1)
   * @param {T} element
   */
  first(): Node<T> {
    if (!this.isEmpty()) {
      return this.queueContainer.head;
    }
    return null;
  }

  /**
   * Add an item to the queue
   * Time complexity: O(1)
   * @param {T} element
   */
  rear(): Node<T> {
    if (!this.isEmpty()) {
      return this.queueContainer.tail;
    }

    return null;
  }

  getCount(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return 0 === this.count;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.queueContainer[Symbol.iterator]();
  }
}
