export class Node<T> {
  constructor(
    public value: T,
    public nextPointer: Node<T> | null = null,
    public previousPointer: Node<T> | null = null
  ) {}
}
