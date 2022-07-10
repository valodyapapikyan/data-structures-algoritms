import { Node } from './../data-structures/LinkedList/node';

export interface ILinkedList<T> {
  insertFirst(data: T): Node<T>,
  insertLast(data: T): Node<T>,
  deleteFirst(): boolean,
  deleteLast(): boolean,
  traverse(): T[];
  size(): number;
  search(data: T): Node<T> | null;
}

