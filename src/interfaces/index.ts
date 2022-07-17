import { Node } from './../data-structures/LinkedList/node';


interface IGeneral<T> {
  size(): number;
  traverse(): T[];
  isEmpty(): boolean,
}

export interface ILinkedList<T> extends IGeneral<T> {
  insertFirst(data: T): Node<T>,
  insertLast(data: T): Node<T>,
  deleteFirst(): boolean,
  deleteLast(): boolean,
  search(data: T): Node<T> | null;
}


export interface IDoublyLinkedList<T> extends IGeneral<T> {
  first(): T,
  last(): T,
  addFirst(element: T): void,
  addLast(element: T): void,
  removeFisrt(): T,
  removeLast(): T
}
