import { IComparator } from '../../interfaces/index';
import { Comparator } from '../../utils/comparator';

export const binarySearch = function <T>(
  sortedArray: T[],
  key: any,
  comparatorCallback: IComparator<T> = undefined
) {
  const comparator = new Comparator(comparatorCallback);

  let startIndex = 0;

  let endIndex: number = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (comparator.isEqual(sortedArray[middleIndex], key)) {
      return middleIndex;
    }

    if (comparator.lessThan(sortedArray[middleIndex], key)) {
      startIndex = middleIndex + 1;
    }
    if (comparator.greatherThan(sortedArray[middleIndex], key)) {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
};
