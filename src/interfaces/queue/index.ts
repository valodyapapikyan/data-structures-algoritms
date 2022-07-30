
import { Node } from './../../data-structures/LinkedList/node';

export interface IQueue<T> {
  enque(element :T) : void,
  deque():  Node<T>;
  first() : Node<T>;
  rear (): Node<T>;
  isEmpty (): boolean
}