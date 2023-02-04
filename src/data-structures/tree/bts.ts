import { TreeNode } from './tree-node';
import { Comparator } from '../../utils/comparator';

export class BinarySearchTree<T> {
  root: TreeNode<T> = null;

  constructor() {
    this.root = null;
  }

  private insertNode(node: any, newNode: any) {
    if (new Comparator().lessThan(newNode.value, node.value)) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  insert(value: any) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private preOrder(node: any) {
    if (node === null) return;

    this.print(node);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  private inOrder(node: any) {
    if (node === null) return;

    this.inOrder(node.left);
    this.print(node);
    this.inOrder(node.right);
  }

  private postOrder(node: any) {
    if (node === null) return;

    this.postOrder(node.left);
    this.postOrder(node.right);
    this.print(node);
  }

  public traverseDFS() {}

  public traverseBFS() {}

  private minimumValue(root: TreeNode<T>) {

    let minValue = root.value;
    while (root.left != null) {
      minValue = root.left.value;
      root = root.left;
    }
    return minValue;
  }

  public delete(value: any) {
    this.root = this.deleteRecursive(this.root, value);
  }

  private deleteRecursive(root: TreeNode<T>, value: T): TreeNode<T> {
    if (root == null) return root;

    if (value < root.value) {
      root.left = this.deleteRecursive(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteRecursive(root.right, value);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }

      root.value = this.minimumValue(root.right); // stex dnuma rightum gtac amenapoqr arjeqe
      root.right = this.deleteRecursive(root.right, root.value);
    }
    return root;
  }

  print(node: any = this.root) {
    console.log(node);
  }
}
