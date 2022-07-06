import { Node } from './../data-structures/LinkedList/node';

export interface ILinkedList<T> {
  insertFirst(data: T): Node<T>,
  insertLast(data: T):  Node<T>,
  deleteNode(Node: Node<T>) : boolean,
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}

