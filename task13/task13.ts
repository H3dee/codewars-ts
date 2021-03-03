/**
 * Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
 */

export const partsSum = (ls: number[]): number[] => [
    ...ls.reduce(
        (acc) => {
            acc.sums.push(acc.numbers.reduce((acc, value) => acc + value, 0));
            acc.numbers.shift();
            return acc;
        },
        { numbers: [...ls], sums: [] },
    ).sums,
    0,
];

console.log(partsSum([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
