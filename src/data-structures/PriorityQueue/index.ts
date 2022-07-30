import { Comparator } from './../../utils/Comparator';
import { IQueue } from './../../interfaces/queue/index';
import { DoblyLinkedList } from '../DoublyLinkedList/index';
import { Node } from '../DoublyLinkedList/node';

export class PriorityQueue<T> implements IQueue<T> {
  count: number;
  list: DoblyLinkedList<T>;

  constructor() {
    this.count = 0;
    this.list = new DoblyLinkedList();
  }

  /**
   * Add an item to the queue
   * Time complexity: O(n)
   * @param {T} element
   */
  enqueue(element: T): void {
    const node = new Node(element);

    if (this.list.head === null) {
      this.list.addFirst(element);
    } else if (new Comparator().lessThan(this.list.head.value, element)) {
      node.nextPointer = this.list.first();
      this.list.first().previousPointer = node;
      this.list.head = node;
    } else if (new Comparator().greatherThan(this.list.tail.value, element)) {
      node.previousPointer = this.list.tail;
      this.list.tail.nextPointer = node;
      this.list.tail = node;
    } else {
      let temp = this.list.first();

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

    if (
      new Comparator().isEqual(this.list.head.value, this.list.tail.value) === 0
    ) {
      this.list.head = null;
      this.list.tail = null;
    } else {
      this.list.head = this.list.head.nextPointer;
      this.list.head.previousPointer = null;
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
      return this.list.head;
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
      return this.list.tail;
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
    return this.list[Symbol.iterator]();
  }
}
