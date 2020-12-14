//   В массиве заменить все числа, большие данного числа, на среднее арифметическое всех чисел массива.

const replace = (arr: Array<number>, comparator: number): Array<number> => {
  const average: number =
    Math.round(arr.reduce((acc, number) => (acc += number), 0) / arr.length)

  return arr.map((item) => (item > average ? average : item));
};

const numbers: number[] = [1, 45, 21, 77, 5, 6]

console.log(replace(numbers, 20));