import { Node } from '../../data-structures/linked-list/node';

export interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): Node<T>;
  first(): Node<T>;
  rear(): Node<T>;
  isEmpty(): boolean;
}
