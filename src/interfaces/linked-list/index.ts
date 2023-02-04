import { Node } from '../../data-structures/linked-list/node';


export type TSearch<T> = {
  data:T,
  callback: (nodeValue: T) => any
}
interface IGeneral<T> extends Iterable<T> {
  size(): number;
  traverse(): T[];
  isEmpty(): boolean;
  search(args: TSearch<T>): Node<T> | null;
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
