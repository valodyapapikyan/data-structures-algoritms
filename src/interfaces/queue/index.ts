import { Node } from './../../data-structures/LinkedList/node';

export interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): Node<T>;
  first(): Node<T>;
  rear(): Node<T>;
  isEmpty(): boolean;
}
