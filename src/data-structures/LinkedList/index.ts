import { ILinkedList } from './../../interfaces/index';
import { Node } from './node';
import { isEmpty } from '../../utils/isEmpty';
import { Comparator } from '../../utils/Comparator';

export class LinkedList<T> implements ILinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  linkedListSize: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.linkedListSize = 0;
  }

  isEmpty(): boolean {
    return 0 === this.linkedListSize;
  }

  insertFirst(data: T): Node<T> {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextPointer = this.head;
      this.head = node;
    }
    this.linkedListSize++;
    return node;
  }

  insertLast(data: T): Node<T> {
    const node = new Node(data);

    if (isEmpty(this.linkedListSize)) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextPointer = node;
      this.tail = node;
    }

    this.linkedListSize++;
    return node;
  }

  deleteFirst(): boolean {
    if (isEmpty(this.linkedListSize)) {
      return false;
    }

    this.head = this.head.nextPointer;
    this.linkedListSize--;
    return true;
  }

  deleteLast(): boolean {
    let currentNode = this.head;
    let temp;

    while (currentNode) {
      if (currentNode.nextPointer) {
        temp = currentNode;
      }
      currentNode = currentNode.nextPointer;
    }

    temp.nextPointer = null;
    this.tail = temp;

    this.linkedListSize--;
    return true;
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

  size(): number {
    return this.linkedListSize;
  }

  search(data: T): Node<T> {
    let currentNode = this.head;
    let node: Node<T> = null;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (new Comparator().isEqual(currentNode.value, data)) {
        node = currentNode;
      }
      currentNode = currentNode.nextPointer;
    }
    return node;
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
