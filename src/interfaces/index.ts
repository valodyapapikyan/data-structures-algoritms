import { Node } from './../data-structures/LinkedList/node';

interface IGeneral<T> {
  size(): number;
  traverse(): T[];
  isEmpty(): boolean;
  search(data: T): Node<T> | null;
}

export interface ILinkedList<T> extends IGeneral<T> {
  insertFirst(data: T): Node<T>;
  insertLast(data: T): Node<T>;
  deleteFirst(): boolean;
  deleteLast(): boolean;
}

export interface IDoublyLinkedList<T> extends IGeneral<T> {
  first(): Node<T>;
  last(): Node<T>;
  addFirst(element: T): boolean;
  addLast(element: T): boolean;
  removeFisrt(): boolean;
  removeLast(): boolean;
}
