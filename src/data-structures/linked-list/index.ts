import { ILinkedList } from '../../interfaces/index';
import { Node } from './node';
import { isEmpty } from '../../utils/is-empty';
import { Comparator } from '../../utils/comparator';
import { TSearch } from '../../interfaces/linked-list/index';

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

  delete(data: T): null | Node<T> {
    let deletedNode: null | Node<T> = null;

    if (!this.head) {
      return null;
    }

    while (this.head && new Comparator().isEqual(this.head.value, data)) {
      deletedNode = this.head;
      this.head = this.head.nextPointer;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.nextPointer) {
        if (new Comparator().isEqual(currentNode.nextPointer.value, data)) {
          deletedNode = currentNode.nextPointer;
          currentNode.nextPointer = currentNode.nextPointer.nextPointer;
        } else {
          currentNode = currentNode.nextPointer;
        }
      }
    }

    if (new Comparator().isEqual(this.tail.value, data)) {
      this.tail = currentNode;
    }

    return deletedNode;
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

  search(args: TSearch<T>): Node<T> {
    const { callback, data } = args;

    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (data !== undefined && new Comparator().isEqual(currentNode.value, data)) {
        return currentNode;
      }

      currentNode = currentNode.nextPointer;
    }

    return null;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.nextPointer;
    }

    return nodes;
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
