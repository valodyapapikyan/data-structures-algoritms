import { ILinkedList } from './../../interfaces/index';
import { Node } from './node';


export class LinkedList<T> implements ILinkedList<T> {
    insertFirst(data: T): Node<T> {
        throw new Error('Method not implemented.');
    }
    insertLast(data: T): Node<T> {
        throw new Error('Method not implemented.');
    }
    deleteNode(Node: Node<T>): boolean {
        throw new Error('Method not implemented.');
    }
    traverse(): T[] {
        throw new Error('Method not implemented.');
    }
    size(): number {
        throw new Error('Method not implemented.');
    }
    search(comparator: (data: T) => boolean): Node<T> {
        throw new Error('Method not implemented.');
    }

}