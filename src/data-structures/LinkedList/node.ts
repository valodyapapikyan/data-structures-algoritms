
export class Node<T> {
    public nextPointer:  Node<T> | null = null;
    constructor(public value:  T ) {}
}