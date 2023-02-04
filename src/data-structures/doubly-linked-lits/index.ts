import { Comparator } from '../../utils/comparator';
import { isEmpty } from '../../utils/is-empty';
import { IDoublyLinkedList } from '../../interfaces/index';
import { Node } from './node';
import { TSearch } from '../../interfaces/linked-list/index';

export class DoblyLinkedList<T> implements IDoublyLinkedList<T> {
  linkedListSize: number;
  head: Node<T>;
  tail: Node<T>;

  constructor() {
    this.linkedListSize = 0;
    this.tail = null;
    this.head = null;
  }

  search(args: TSearch<T>): Node<T> {
    const { data } = args;

    if (isEmpty(this.linkedListSize)) {
      return null;
    }

    let currentNode = this.head;
    let node: Node<T> = null;

    while (currentNode) {
      if (new Comparator().isEqual(currentNode.value, data)) {
        node = currentNode;
      }
      currentNode = currentNode.nextPointer;
    }
    return node;
  }

  first(): Node<T> {
    return this.head;
  }

  last(): Node<T> {
    return this.tail;
  }

  addFirst(element: T): boolean {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextPointer = this.head;
      this.head.previousPointer = node;
      this.head = node;
      node.previousPointer = null;
    }

    this.linkedListSize++;
    return true;
  }

  addLast(element: T): boolean {
    const node = new Node(element);

    if (isEmpty(this.linkedListSize)) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextPointer = node;
      node.previousPointer = this.tail;
      this.tail = node;
    }
    this.linkedListSize++;
    return true;
  }

  removeFisrt(): boolean {
    if (isEmpty(this.linkedListSize)) {
      return false;
    }

    this.head = this.head.nextPointer;
    this.head.previousPointer = null;
    this.linkedListSize--;

    return true;
  }

  removeLast(): boolean {
    if (isEmpty(this.linkedListSize)) {
      return false;
    }

    this.tail = this.tail.previousPointer;
    this.tail.nextPointer = null;
    this.linkedListSize--;
    return true;
  }

  size(): number {
    return this.linkedListSize;
  }

  traverse(): T[] {
    const array: T[] = [];
    let currentNode = this.head;

    if (!currentNode) {
      return array;
    }

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.nextPointer;
    }

    return array;
  }

  isEmpty(): boolean {
    return 0 === this.linkedListSize;
  }

  *[Symbol.iterator](): Iterator<T> {
    if (!this.head) {
      return;
    }

    let current: Node<T> | null;

    for (current = this.head; current !== null; current = current.nextPointer) {
      yield current.value;
    }
  }
}
