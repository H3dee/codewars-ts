//Поменять местами наибольший и наименьший элементы массива.

const swap = (arr: number[]): number[] => {
  const unique: number[] = [...new Set(arr)];
  const max: number = Math.max(...unique);
  const min: number = Math.min(...unique);

  return arr.map((number) => {
    if (number === min) return max;
    if (number === max) return min;
    return number
  });
};


console.log(swap([1, 2, 3]));
