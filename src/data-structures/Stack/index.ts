import { LinkedList } from './../LinkedList/index';
import { IStack } from './../../interfaces/stack/index';
import { Node } from '../LinkedList/node';

export class Stack<T> implements IStack<T>{
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  push(value: T): void {
    this.list.insertLast(value);
  }

  pop(): Node<T> {
    const temp = this.list.tail;
    this.list.deleteLast();
    return temp;
  }

  peak(): Node<T> {
    const temp = this.list.head;
    this.list.deleteFirst();
    return temp;
  }

  getSize(): number {
    return this.list.size();
  }

  [Symbol.iterator]() : Iterator<T>  {
    return this.list[Symbol.iterator]();
  }
}
