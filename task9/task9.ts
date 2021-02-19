export const findOutlier = (integers: Array<number>): number | null => {
  let outlier: number | null = null;

  const isArrayEven = (arr: Array<number>) => {
    const even: number[] = [];
    const odd: number[] = [];

    arr.slice(0, 10).forEach((item) => {
      if (item % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    });

    return even.length > odd.length;
  };

  const findNeedle = (isEven: boolean) => {
    let needle: null | number = null;

    for (let i: number = 0; i < integers.length; i++) {
      if (isEven && integers[i] % 2 !== 0 && !needle) {
        needle = integers[i];
        break;
      } else if (!isEven && integers[i] % 2 === 0 && !needle) {
        needle = integers[i];
        break;
      }
    }

    return needle;
  };

  if (isArrayEven(integers) && !outlier) {
    outlier = findNeedle(true);
  } else if (!isArrayEven(integers) && !outlier) {
    outlier = findNeedle(false);
  }

  return outlier;
};

function odds(n) {
  let res = new Array(n).fill(0);
  res.forEach((_, i, arr) => (arr[i] = 2 * i + 1));
  return res;
}

const numbers = odds(10000000)
numbers.push(150000)

console.log(findOutlier(numbers))
// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));
