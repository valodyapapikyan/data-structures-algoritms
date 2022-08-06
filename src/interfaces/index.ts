import { ILinkedList, IDoublyLinkedList } from './linked-list/index';

export interface IComparator<T> {
  (a: T, B: T): 0 | 1 | -1;
}

export { ILinkedList, IDoublyLinkedList };
