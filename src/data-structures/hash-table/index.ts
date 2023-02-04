import { LinkedList } from '../linked-list/index';

const DEFAULT_HASH_TABLE_SIZE = 32;

export class HashTable {
  buckets: any;

  constructor(hashTableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
  }

  private hash(key: any) {
    let hash = 0;
    const lng = key.length;

    if (lng == 0) return hash;

    for (let i = 0; i < lng; i++) {
      const ch = key.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash = hash & hash;
    }

    return hash % DEFAULT_HASH_TABLE_SIZE;
  }

  add(key: string, value: any) {
    const bucketLinkedList = this.buckets[this.hash(key)];

    const node = bucketLinkedList.search({ callback: (nodeValue: any) => nodeValue.key === key });

    if (!node) {
      bucketLinkedList.insertFirst({ key, value });
    } else {
      node.value.value = value;
    }
  }

  delete(key: string) {
    const bucketLinkedList = this.buckets[this.hash(key)];

    const node = bucketLinkedList.search({ callback: (nodeValue: any) => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  get(key: string) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList?.search({ callback: (nodeValue: any) => nodeValue.key === key });

    return node ? node.value?.value : undefined;
  }

  has(key: string) {
    return !!this.get(key);
  }

  getValues() {
    return this.buckets;
  }
}
