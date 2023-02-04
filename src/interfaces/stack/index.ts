import { Node } from '../../data-structures/linked-list/node';

export interface IStack<T> {
  push(value: T): void;
  pop(): Node<T>;
  peak(): Node<T>;
  getSize(): number;
}
