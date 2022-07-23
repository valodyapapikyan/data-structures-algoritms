export class Comparator<T> {
  compare: (a: T, b: T) => 0 | 1 | -1;

  constructor() {
    this.compare = this.defaultComparator;
  }

  defaultComparator(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  isEqual(a: T, b: T) {
    return this.compare(a, b);
  }

  lessThan(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  greatherThan(a: T, b: T) {
    return this.compare(a, b) > 0;
  }
}
