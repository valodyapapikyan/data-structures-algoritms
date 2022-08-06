import { IComparator } from '../interfaces/index';

export class Comparator<T> {
  compare: IComparator<T>;

  constructor(comparatorCallback: IComparator<T> = undefined) {
    this.compare = comparatorCallback || this.defaultComparator;
  }

  defaultComparator(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  isEqual(a: T, b: T) {
    return this.compare(a, b) === 0;
  }

  lessThan(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  greatherThan(a: T, b: T) {
    return this.compare(a, b) > 0;
  }
}
