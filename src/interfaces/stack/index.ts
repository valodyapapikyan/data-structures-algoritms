import { Node } from '../../data-structures/LinkedList/node';

export interface IStack<T> {
  push(value: T): void;
  pop(): Node<T>;
  peak(): Node<T>;
  getSize(): number;
}
